import { useState, useCallback } from 'react'
import NormalChild from './NormalChild'
import MemoizedChild from './MemoizedChild'

// 関数オブジェクトに一意の ID を振る
let nextId = 0
const fnIds = new WeakMap<object, number>()
function getFnId(fn: object) {
  if (!fnIds.has(fn)) fnIds.set(fn, ++nextId)
  return fnIds.get(fn)!
}

function App() {
  const [count, setCount] = useState(0)

  // useCallback なし — 毎回新しい関数が作られる
  const handleClickWithout = () => { console.log('clicked (no useCallback)') }

  // useCallback あり — 参照が安定する
  const handleClickWith = useCallback(() => { console.log('clicked (useCallback)') }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>useCallback デモ — memo + コールバック props</h1>
      <button onClick={() => setCount(c => c + 1)}>
        count: {count}
      </button>

      <h2>1. memo なし</h2>
      <NormalChild label="normal" onClick={handleClickWithout} />

      <h2>2. memo あり + useCallback なし</h2>
      <p>onClick の ID: {getFnId(handleClickWithout)}</p>
      <MemoizedChild label="memo without useCallback" onClick={handleClickWithout} />

      <h2>3. memo あり + useCallback あり</h2>
      <p>onClick の ID: {getFnId(handleClickWith)}</p>
      <MemoizedChild label="memo with useCallback" onClick={handleClickWith} />
    </div>
  )
}

export default App

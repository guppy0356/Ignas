import { useState } from 'react'
import NormalChild from './NormalChild'
import MemoizedChild from './MemoizedChild'

function App() {
  const [count, setCount] = useState(0)
  const [memoLabel, setMemoLabel] = useState('I am memoized child')

  return (
    <div style={{ padding: '2rem' }}>
      <h1>React.memo デモ</h1>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <button onClick={() => setCount(c => c + 1)}>
          count: {count}（props 変わらない）
        </button>
        <button onClick={() => setMemoLabel(l => l === 'I am memoized child' ? 'label changed!' : 'I am memoized child')}>
          label を切り替え（props 変わる）
        </button>
      </div>
      <h2>memo なし</h2>
      <NormalChild label="I am normal child" />
      <h2>memo あり</h2>
      <MemoizedChild label={memoLabel} />
    </div>
  )
}

export default App

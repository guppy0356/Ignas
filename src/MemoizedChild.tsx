import { memo } from 'react'

const MemoizedChild = memo(function MemoizedChild({ label }: { label: string }) {
  console.log('MemoizedChild rendered')
  return <p>{label}</p>
})

export default MemoizedChild

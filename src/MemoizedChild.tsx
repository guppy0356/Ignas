import { memo } from 'react'

const MemoizedChild = memo(function MemoizedChild({ label, onClick }: { label: string; onClick: () => void }) {
  console.log('MemoizedChild rendered')
  return <p onClick={onClick}>{label}</p>
})

export default MemoizedChild

function NormalChild({ label, onClick }: { label: string; onClick: () => void }) {
  console.log('NormalChild rendered')
  return <p onClick={onClick}>{label}</p>
}

export default NormalChild

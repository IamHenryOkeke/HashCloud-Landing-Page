const AccessCard = ({title, icon, fontSize}) => {
  return (
    <div className="rounded-lg flex items-center gap-4 bg-white px-7 py-5 lg:py-7 lg:px-10">
      {icon}
      <h1 className={"font-medium " + fontSize}>{title}</h1>
    </div>
  )
}

export default AccessCard

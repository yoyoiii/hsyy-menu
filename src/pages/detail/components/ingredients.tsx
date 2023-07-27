
export default function Ingredients({ ingredients }) {

  return (
    <div className="recipe-main-content" id="Ingredients" >
      <ul className="recipe-main-ul">
        {
          ingredients && ingredients.length
            ? ingredients.map((item, index) =>
              <li className="li-ingredient" key={index}>
                <span>{item.name}</span>
                <span className="dashed"></span>
                <span>{item.weight}</span>
              </li>)
            : <div className="no-data">暂无数据</div>
        }
      </ul>
    </div>
  )
}

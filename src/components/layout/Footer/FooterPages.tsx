export default function FooterPages() {
  return (
    <>
      <div className="col-start-4 col-span-1">
        <ul className="text-primary-foreground text-center md:text-start">
          <li className="mb-1">
            <a href="#" className="text-m hover:text-darkblue">
              Рецепты
            </a>
          </li>
          <li className="mb-1">
            <a href="#" className="text-m hover:text-darkblue">
              Продукты
            </a>
          </li>
          <li className="mb-1">
            <a href="#" className="text-m hover:text-darkblue">
              Разделы
            </a>
          </li>
        </ul>
      </div>
      <div className="col-start-5 col-span-1 mr-2">
        <ul className="text-primary-foreground text-center md:text-start">
          <li className="mb-1">
            <a href="#" className="text-m hover:text-darkblue">
              Калькулятор питания
            </a>
          </li>
          <li className="mb-1">
            <a href="#" className="text-m hover:text-darkblue">
              Личный кабинет
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

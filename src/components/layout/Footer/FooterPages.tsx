import FooterLink from "./FooterLink";

export default function FooterPages() {
  return (
    <>
      <div className="col-start-4 col-span-1">
        <ul className="text-primary-foreground text-center md:text-start">
          <li className="mb-1">
            <FooterLink name="Рецепты" path="/recipes"/>
          </li>
          <li className="mb-1">
            <FooterLink name="Продукты" path="/products"/>
          </li>
          <li className="mb-1">
            <FooterLink name="Разделы" path="/categories"/>
          </li>
        </ul>
      </div>
      <div className="col-start-5 col-span-1 mr-2">
        <ul className="text-primary-foreground text-center md:text-start">
          <li className="mb-1">
            <FooterLink name="Калькулятор питания" path="/calculator"/>
          </li>
          <li className="mb-1">
            <FooterLink name="Личный кабинет" path="/account"/>
          </li>
        </ul>
      </div>
    </>
  );
}

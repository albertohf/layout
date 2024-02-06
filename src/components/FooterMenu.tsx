interface DataProps {
  title: string;
  items: Array<string>;
}

export default function FooterMenu({ data }: { data: DataProps[] }) {
  return (
    <>
      {data.map((item, index) => (
        <ul key={index} className="footer-menu-content">
          <h2 className="footer-menu-title">{item.title}</h2>
          {item.items.map((item, index) => (
            <li className="footer-menu-list" key={index}>
              {item}
            </li>
          ))}
        </ul>
      ))}
    </>
  );
}

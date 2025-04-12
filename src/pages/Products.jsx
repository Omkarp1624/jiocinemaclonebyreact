import Productitem from "../components/Productitem";

export default function Products() {
  return (
    <>
      <div className="products">
        <Productitem name="Vivo" price={30000} />
        <Productitem name="Samsung" price={40000} />
        <Productitem name="iPhone" price={80000} />
        <Productitem name="OnePlus" price={35000} />
      </div>
    </>
  );
}
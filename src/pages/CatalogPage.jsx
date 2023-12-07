import data from "../advertsCars.json";
console.log(data[0].address.split(",").slice(1, 2).join(" | "));

const CatalogPage = () => {
  return data.map((value) => {
    return <p key={value.id}>{value.make}</p>;
  });
};

export default CatalogPage;

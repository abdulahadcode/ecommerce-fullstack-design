import { useParams } from "react-router-dom";
import React from "react";

function Products() {

const { category } = useParams();

return (
<section className="flex justify-center mt-6">
<div className="w-[77vw] grid grid-cols-1 lg:grid-cols-5 gap-6">

{/* LEFT SIDEBAR */}
<div className="lg:col-span-1">

<h3 className="font-semibold">Category</h3>

<ul className="space-y-2 mt-2 text-sm">
<li>Mobile accessory</li>
<li>Electronics</li>
<li>Smartphones</li>
<li>Modern tech</li>
</ul>

{/* brands */}
<h3 className="font-semibold mt-6">Brands</h3>

<div className="space-y-2 mt-2 text-sm">
<label className="flex gap-2">
<input type="checkbox"/> Samsung
</label>

<label className="flex gap-2">
<input type="checkbox"/> Apple
</label>

<label className="flex gap-2">
<input type="checkbox"/> Poco
</label>

</div>

</div>


{/* RIGHT PRODUCTS */}
<div className="lg:col-span-4">

{/* top bar */}
<div className="flex justify-between mb-4">
<p className="text-sm">
12,911 items in {category}
</p>

<select className="border p-1 text-sm">
<option>Featured</option>
<option>Low price</option>
<option>High price</option>
</select>

</div>

{/* grid */}
<div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

{/* cards here */}

</div>

</div>

</div>
</section>
);
}

export default Products;
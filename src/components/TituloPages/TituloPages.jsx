export default function Example(props) {
    return (
        <div className="flex flex-col">
            <h4 className="bg-black w-max text-white p-2">Sección</h4>
            <h2 className=" text-3xl font-bold font-light text-lime-700">
                {props.titulo}
            </h2>
        </div>
    )
}
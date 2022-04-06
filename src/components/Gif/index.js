export default function Gif({ title, url }) {
    return (
        <div className="card-gif">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}

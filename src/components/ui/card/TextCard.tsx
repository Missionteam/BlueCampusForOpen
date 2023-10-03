

export default function TextCard({ title, body }: { title: string; body: string; }) {
    const style = {
        backgroundColor: '#00008B',
        color: '#FFFFFF',
        padding: '20px',
        minHeight: "300px",
        minWidth: '300px',
        maxWidth: '500px',
        width: '60%',
        margin: '30px',
    }
    return (
        <div style={style}>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    );
};
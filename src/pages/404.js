
export default function NotFound(props) {
    return (
        <>
            <Result status={"404"} title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>} />
        </>
    )
}

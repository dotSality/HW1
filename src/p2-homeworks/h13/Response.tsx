type ResponseType = {
    info: string,
    error: string,
}

export const Response = (props: ResponseType) => {
    return (
        <div>
            <div>{props.info}</div>
            <div>{props.error}</div>
        </div>
    )
}
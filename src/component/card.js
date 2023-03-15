import { Card as AntdCard } from "antd"
import './card.css'

export default function Card(props) {
    const { title } = props

    const wrap = (
        <div style={{ textAlign: 'left' }}>
            <span className="card-tittle">{title}</span>
        </div>
    )
    return (
        <AntdCard
            title={wrap}
            bordered={false}
            size="large"
        >
            {props.children}
        </AntdCard>
    )
}

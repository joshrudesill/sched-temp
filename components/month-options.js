import { useEffect, useState } from "react"
const dayjs = require('dayjs');

const MonthOptions = ({ reg }) => {
    const [months, setMonths] = useState()
    useEffect(() => {
        const d = dayjs()
        var ms = []
        for (let i = 0; i < 3; i++) {
            const dta = {
                m: d.add(i, 'M').format('MMMM'),
                v: d.add(i, 'M').format('M')
                }
            ms.push(dta)
        }
        setMonths(ms)
    }, [])
    return (
        <select {...reg('month')}>
            {
                months ? months.map((m, i) => <option selected={i === 0 ? true : false} value={m.v} key={m.v}>{m.m}</option>) : ''
            }
        </select>
    )
}

export default MonthOptions;
const CriptoHistory = ({ History }) => {

    return (
        <div className="history">
            <div className="history-title">
                <h2>History</h2>
            </div>

            <table className="table-history">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        History.map(({ date, priceUsd, time }) => (
                            <tr key={time}>
                                <td>{
                                    JSON.stringify(date).substring(1, 11)
                                }</td>
                                <td className="positive">$ {parseFloat(priceUsd).toFixed(3)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )

}
export default CriptoHistory 
import { useParams, Link } from "react-router-dom"
import "./criptopage.css"
import usePetition from "../../hooks/usePetition"
import CriptoInfo from "./CriptoInfo"
import CriptoHistory from "./CriptoHistory"

const CriptoPage = () => {

    const params = useParams()

    const [cripto, cargandoCripto] = usePetition(`assets/${params.id}`)
    const [criptoHistory, cargandoHistory] = usePetition(`assets/${params.id}/history?interval=d1`)

    if (cargandoCripto || cargandoHistory) return (
        <>
            <>
                <div className="laoding">
                    <span> Cargando... </span>
                </div>

            </>
        </>
    )


    return (
        <>
            <div className="cripto-container">
                {
                    cripto && <CriptoInfo
                        cripto={cripto} />
                }
                {
                    criptoHistory && <CriptoHistory
                        History={criptoHistory}
                    />
                }

            </div>
        </>

    )
}
export default CriptoPage
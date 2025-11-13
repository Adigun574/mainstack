import { CiCircleInfo } from "react-icons/ci";

export default function StatCard({ label, value }: { label: string; value: number | string }) {
    return (
        <div className="stat-row">
            <div className="stat">
                <p className="muted">{label}</p>
                <h3>USD {value || 0}</h3>
            </div>
            <div>
                <CiCircleInfo />
            </div>
        </div>
    )
}
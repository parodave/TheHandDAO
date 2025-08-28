import StatCard from '@/components/StatCard';
import ActionsPanel from '@/components/ActionsPanel';
import TableMinimal from '@/components/TableMinimal';

export default function DashboardPage() {
  return (
    <main className="section">
      <div className="container py-16 md:py-24">
        <h1 className="h1">Dashboard</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <StatCard title="Membres" value="99" />
          <StatCard title="Trésor" value="₿ 1.25" />
          <StatCard title="Revenus mensuels" value="$ 9,990" />
          <StatCard title="Distributions" value="$ 4,950" />
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <ActionsPanel />
          <TableMinimal />
        </div>
      </div>
    </main>
  );
}

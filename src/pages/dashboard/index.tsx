import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Badge } from "lucide-react";
import Button from "../../components/ui/Button";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

const inventoryData = [
  { name: "Disponible", value: 400 },
  { name: "Reservado", value: 150 },
  { name: "En cuarentena", value: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const slowMoving = [
  { sku: "SKU-1001", name: "Producto A", stock: 120, days: 45 },
  { sku: "SKU-2045", name: "Producto B", stock: 85, days: 60 },
  { sku: "SKU-3012", name: "Producto C", stock: 200, days: 90 },
];

export default function DashboardPage() {
  return (
    <DashboardLayout title="Métricas">
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Distribución de Inventario</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={inventoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {inventoryData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {inventoryData.map((item, index) => (
                <div key={item.name} className="flex items-center">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Productos de Movimiento Lento</CardTitle>
            <CardDescription>
              Stock sin movimiento en más de 30 días
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>SKU</TableHead>
                  <TableHead>Producto</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Días sin movimiento</TableHead>
                  <TableHead>Acción</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {slowMoving.map((product) => (
                  <TableRow key={product.sku}>
                    <TableCell className="font-medium">{product.sku}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Badge>{product.days} días</Badge>
                    </TableCell>
                    <TableCell>
                      <Button type="primary" onClick={() => {}}>
                        Analizar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Rotación de Inventario por Categoría</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            {/* Gráfico de rotación por categoría */}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}

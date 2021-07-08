<?php

namespace Modules\InventoryManagement\Imports;


use App\Models\Company;
use App\Models\User;
use App\Notifications\NewAccountResetPasswordNotification;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Modules\EmployeeManagement\Models\Employee;
use Modules\InventoryManagement\Database\Factories\ProductSKU;
use Modules\InventoryManagement\Models\ProductPurchasingPrice;
use Modules\InventoryManagement\Models\ProductSellingPrice;
use Modules\InventoryManagement\Models\Warehouse;
use Modules\InventoryManagement\Models\WarehouseStock;
use Modules\InventoryManagement\Models\WarehouseStockProductItem;
use Modules\InventoryManagement\Models\WarehouseStockProductItemCode;
use Spatie\Permission\Models\Role;


class WarehouseStockImport implements ToCollection, withValidation, withHeadingRow
{

    public function collection(Collection $rows)
    {
        foreach ($rows as $row)
        {
           $product_sku = ProductSKU::where('name',$row['sku_name'])->first();
           $warehouse_stock = WarehouseStock::where('code',$row['stock_code'])->first();
            $stock_item = WarehouseStockProductItem::create([
                'product_s_k_u_id' => $product_sku->id,
                'warehouse_stock_id' => $warehouse_stock->id
            ]);

            ProductSellingPrice::create([
                'amount' => $row['selling_price_amount'],
                'start_at' => $row['selling_price_start_date'],
                'product_s_k_u_id' => $product_sku->id,
                'warehouse_stock_id' => $warehouse_stock->id
            ]);

            ProductPurchasingPrice::create([
                'amount' => $row['selling_price_amount'],
                'product_s_k_u_id' => $product_sku->id,
                'warehouse_stock_id' => $warehouse_stock->id
            ]);

            if($row['imei_1']) {
                WarehouseStockProductItemCode::create([
                    'key' => 'imei_1',
                    'value' => $row['imei_1'],
                    'warehouse_stock_product_item_id' => $stock_item->id
                ]);
            }

            if($row['imei_2']) {
                WarehouseStockProductItemCode::create([
                    'key' => 'imei_2',
                    'value' => $row['imei_2'],
                    'warehouse_stock_product_item_id' => $stock_item->id
                ]);
            }

            if($row['serial_no']) {
                WarehouseStockProductItemCode::create([
                    'key' => 'serial_no',
                    'value' => $row['serial_no'],
                    'warehouse_stock_product_item_id' => $stock_item->id
                ]);
            }


        }
    }

    public function rules(): array
    {
        return [
            'stock_code' => ['required', 'string','exists:warehouse_stocks,code'],
            'product_sku' => ['required', 'string','exists:product_s_k_us,name'],
            'imei_1' => ['required', 'numeric'],
            'imei_2' => ['nullable', 'numeric'],
            'serial_no' => ['nullable', 'string'],
            'selling_price_amount' => ['required', 'numeric'],
            'selling_price_start_date' => ['required'],
            'buying_price_amount' => ['required', 'numeric']
        ];
    }
}

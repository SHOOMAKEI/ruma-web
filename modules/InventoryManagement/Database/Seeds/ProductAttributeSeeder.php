<?php


namespace Modules\InventoryManagement\Database\Seeds;


use Illuminate\Database\Seeder;
use Modules\InventoryManagement\Models\ProductAttribute;
use Modules\InventoryManagement\Models\ProductAttributeCategory;
use Modules\InventoryManagement\Models\ProductType;

class ProductAttributeSeeder extends Seeder
{


    public function run()
    {

       $product_type = ProductType::firstOrCreate([
            'name' => 'Smart Phone',
            'code_name' => 'SP',
            'description' => 'Smart Phone',
        ]);

        $product_category1 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Network',
            'code_name' => 'NT',
            'description' => 'Network',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Technology',
            'code_name' => 'TECH',
            'description' => 'Technology',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category1->id,
        ]);

        $product_category2 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Launch',
            'code_name' => 'Launch',
            'description' => 'Launch',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Announced',
            'code_name' => 'Announced',
            'description' => 'Announced',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category2->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Status',
            'code_name' => 'Status',
            'description' => 'Status',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category2->id,
        ]);

        $product_category3 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Body',
            'code_name' => 'Body',
            'description' => 'Body',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Dimensions',
            'code_name' => 'Dimensions',
            'description' => 'Dimensions',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category3->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Weight',
            'code_name' => 'Weight',
            'description' => 'Weight',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category3->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Build',
            'code_name' => 'Build',
            'description' => 'Build',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category3->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'SIM',
            'code_name' => 'SIM',
            'description' => 'SIM',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category3->id,
        ]);

        $product_category4 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Display',
            'code_name' => 'Display',
            'description' => 'Display',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Type',
            'code_name' => 'Type',
            'description' => 'Type',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category4->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Size',
            'code_name' => 'Size',
            'description' => 'Size',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category4->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Resolution',
            'code_name' => 'Resolution',
            'description' => 'Resolution',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category4->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Protection',
            'code_name' => 'Protection',
            'description' => 'Protection',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category4->id,
        ]);

        $product_category5 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Platform',
            'code_name' => 'Platform',
            'description' => 'Platform',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'OS',
            'code_name' => 'OS',
            'description' => 'OS',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category5->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Chipset',
            'code_name' => 'Chipset',
            'description' => 'Chipset',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category5->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'CPU',
            'code_name' => 'CPU',
            'description' => 'CPU',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category5->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'GPU',
            'code_name' => 'GPU',
            'description' => 'GPU',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category5->id,
        ]);

        $product_category6 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Memory',
            'code_name' => 'Memory',
            'description' => 'Memory',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Card slot',
            'code_name' => 'Card slot',
            'description' => 'Card slot',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category6->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Internal',
            'code_name' => 'Internal',
            'description' => 'Internal',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category6->id,
        ]);

        $product_category7 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Main Camera',
            'code_name' => 'Main Camera',
            'description' => 'Main Camera',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Quad',
            'code_name' => 'Quad',
            'description' => 'Quad',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category7->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Features',
            'code_name' => 'Features',
            'description' => 'Features',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category7->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Video',
            'code_name' => 'Video',
            'description' => 'Video',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category7->id,
        ]);

        $product_category8 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Selfie camera',
            'code_name' => 'Selfie camera',
            'description' => 'Selfie camera',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Single',
            'code_name' => 'Single',
            'description' => 'Single',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category8->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Features',
            'code_name' => 'Features',
            'description' => 'Features',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category8->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Video',
            'code_name' => 'Video',
            'description' => 'Video',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category8->id,
        ]);

        $product_category9 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Sound',
            'code_name' => 'Sound',
            'description' => 'Sound',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Loudspeaker',
            'code_name' => 'Loudspeaker',
            'description' => 'Loudspeaker',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category9->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => '3.5mm jack',
            'code_name' => '3.5mm jack',
            'description' => '3.5mm jack',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category9->id,
        ]);

        $product_category10 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Comms',
            'code_name' => 'Comms',
            'description' => 'Comms',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'WLAN',
            'code_name' => 'WLAN',
            'description' => 'WLAN',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category10->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Bluetooth',
            'code_name' => 'Bluetooth',
            'description' => 'Bluetooth',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category10->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'GPS',
            'code_name' => 'GPS',
            'description' => 'GPS',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category10->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'NFC',
            'code_name' => 'NFC',
            'description' => 'NFC',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category10->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Infrared port',
            'code_name' => 'Infrared port',
            'description' => 'Infrared port',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category10->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Radio',
            'code_name' => 'Radio',
            'description' => 'Radio',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category10->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'USB',
            'code_name' => 'USB',
            'description' => 'USB',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category10->id,
        ]);

        $product_category11 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Features',
            'code_name' => 'Features',
            'description' => 'Features',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Sensors',
            'code_name' => 'Sensors',
            'description' => 'Sensors',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category11->id,
        ]);

        $product_category12 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Battery',
            'code_name' => 'Battery',
            'description' => 'Battery',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Type',
            'code_name' => 'Type',
            'description' => 'Type',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category12->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Charging',
            'code_name' => 'Charging',
            'description' => 'Charging',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category12->id,
        ]);

        $product_category13 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Misc',
            'code_name' => 'Misc',
            'description' => 'Misc',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Colors',
            'code_name' => 'Colors',
            'description' => 'Colors',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category13->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Models',
            'code_name' => 'Models',
            'description' => 'Models',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category13->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'SAR',
            'code_name' => 'SAR',
            'description' => 'SAR',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category13->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'SAR EU',
            'code_name' => 'SAR EU',
            'description' => 'SAR EU',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category13->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Price',
            'code_name' => 'Price',
            'description' => 'Price',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category13->id,
        ]);

        $product_category14 = ProductAttributeCategory::firstOrCreate([
            'name' => 'Tests',
            'code_name' => 'Tests',
            'description' => 'Tests',
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Performance',
            'code_name' => 'Performance',
            'description' => 'Performance',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category14->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Display',
            'code_name' => 'Display',
            'description' => 'Display',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category14->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Camera',
            'code_name' => 'Camera',
            'description' => 'Camera',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category14->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Loudspeaker',
            'code_name' => 'Loudspeaker',
            'description' => 'Loudspeaker',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category14->id,
        ]);

        ProductAttribute::firstOrCreate([
            'name' => 'Battery life',
            'code_name' => 'Battery life',
            'description' => 'Battery life',
            'product_type_id' => $product_type->id,
            'product_attribute_category_id' => $product_category14->id,
        ]);


    }

}

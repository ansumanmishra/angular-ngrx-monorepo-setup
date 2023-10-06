export interface Device {
    id: number;
    name: string;
    serial_no: string;
    make: string;
    model: string;
    purchaseDate: string;
    warrantyExpiration: string;
    location: string;
    status: "Active" | "Inactive";
}
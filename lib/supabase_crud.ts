import supabase from "./supabase";

const TABLE_NAME = "sampledb";

export async function getDB() {
    const { data, error } = await supabase.from(TABLE_NAME).select("*");
    if (error) {
        throw error;
    }
    return data;
}
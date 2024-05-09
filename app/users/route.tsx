import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
    const supabase = createClient();
    const allUserData = (await supabase
        .from('Places')
        .select('*'))
        .data;

    return NextResponse.json(allUserData);
}

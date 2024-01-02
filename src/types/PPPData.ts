type Result = {
    country: string;
    country_id: string;
    indicator_name: string;
    indicator_code: string;
    year: string;
    ppp: number;
}

export type PPPData = {
    total_count: number;
    results: Result[];
}



import useData from "./useData";

export interface Platforms {
    id: number;
    name: string;
    slug: string;
}

const Platforms = () => useData<Platforms>('/platforms/lists/parents');

export default Platforms;
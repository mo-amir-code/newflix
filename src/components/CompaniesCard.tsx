
import Image from 'next/image'
import { imageBaseUrl } from '@/lib/constants'
import { ProductionCompaniesType } from '@/lib/services/service'

type companyType = {
    company: ProductionCompaniesType
}

const CompaniesCard = ({ company }: companyType) => {

    return (
        <div className='w-52 max-[960px]:w-48 max-[600px]:w-44 hover:-translate-y-2 py-4 transition-all cursor-pointer' >
            <div className='w-full flex items-center shadow-sm shadow-primary gap-2 flex-col p-3 bg-primary/10 rounded-lg h-44 max-[960px]:h-40 max-[600px]:h-36' >
                <div className='w-44 h-24 max-[600px]:w-40 max-[600px]:h-20 overflow-hidden bg-white flex items-center justify-center rounded-lg' >
                    <Image src={`${imageBaseUrl}w500${company?.logo_path}`} alt={company?.name} width={200} height={250} className='object-contain object-center w-full' />
                </div>
                <div className='w-full px-1 flex items-center gap-2' >
                    <span className='text-xs font-semibold' >{company?.name}</span>
                </div>
            </div>
        </div>
    )
}

export default CompaniesCard

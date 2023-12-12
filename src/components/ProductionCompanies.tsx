import React from 'react'
import { ProductionCompaniesType } from '@/lib/services/service'
import CompaniesCard from './CompaniesCard'

type companiesType = {
    productionCompanies: Array<ProductionCompaniesType>
}

const ProductionCompanies = ({ productionCompanies }: companiesType) => {

    return (
        <div className='relative w-full border-b-4 border-border-bottom py-12 px-4' >
            <div className='max-w-5xl overflow-hidden w-full mx-auto space-y-6' >
                <h2 className='text-4xl font-bold max-[960px]:text-3xl max-[600px]:text-xl' >Production Companies</h2>
                <div className='w-full overflow-auto flex items-center gap-4 hideScrollbar' >
                    {productionCompanies?.map((company: ProductionCompaniesType) => (
                        <CompaniesCard key={company.id} company={company} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductionCompanies

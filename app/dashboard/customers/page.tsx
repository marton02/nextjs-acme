import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomers, fetchFilteredCustomers, fetchInvoicesPages } from '@/app/lib/data';

export default async function Page({ searchParams, }: { searchParams?: { query?: string; page?: string; }; }) {
    const query = searchParams?.query || '';

    const customers = await fetchFilteredCustomers(query);

    return (
        <Table customers={customers} />
    );
}
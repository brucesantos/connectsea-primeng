import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// PrimeNG Components
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';

interface PDARecord {
  cod: string;
  client: string;
  vessel: string;
  port: string;
  cargo: string;
  voyage: string;
  callStatus: string;
  pdaStatus: string;
  lastUpdate: string;
  balance: string;
}

@Component({
  selector: 'app-pda-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    PaginatorModule,
    TagModule,
    TooltipModule,
    IconFieldModule,
    InputIconModule
  ],
  templateUrl: './pdadashboard.html',
  styleUrl: './pdadashboard.css'
})
export class PDADashboard {
  // Navigation menu items
  navigationItems = signal<any[]>([
    {
      label: 'Quotations',
      icon: 'pi pi-file',
      items: [
        { label: 'Quotations', icon: 'pi pi-file' },
        { label: 'Templates', icon: 'pi pi-file' },
        { label: 'Clients', icon: 'pi pi-users' },
        { label: 'Configurations', icon: 'pi pi-cog' }
      ]
    },
    {
      label: 'Proforma DAs',
      icon: 'pi pi-file',
      items: [
        { label: 'PDAs', icon: 'pi pi-file', badge: 'ACTIVE' },
        { label: 'Expenses', icon: 'pi pi-file' },
        { label: 'Remittances', icon: 'pi pi-money-bill' },
        { label: 'Configurations', icon: 'pi pi-cog' }
      ]
    },
    {
      label: 'Disbursement Accounts',
      icon: 'pi pi-file',
      items: [
        { label: 'DAs', icon: 'pi pi-file' },
        { label: 'Debit Notes', icon: 'pi pi-file' },
        { label: 'Periodic DAs', icon: 'pi pi-calendar' }
      ]
    }
  ]);

  // Table data
  pdaRecords = signal<PDARecord[]>([
    {
      cod: 'PDA001',
      client: 'Client A',
      vessel: 'Vessel 1',
      port: 'Port X',
      cargo: 'Cargo Y',
      voyage: 'Voy001',
      callStatus: 'ESTIMATED',
      pdaStatus: 'OPEN',
      lastUpdate: '2023-10-01',
      balance: '-100%'
    },
    {
      cod: 'PDA002',
      client: 'Client B',
      vessel: 'Vessel 2',
      port: 'Port Z',
      cargo: 'Cargo W',
      voyage: 'Voy002',
      callStatus: 'ARRIVED',
      pdaStatus: 'CLOSED',
      lastUpdate: '2023-10-02',
      balance: '+75%'
    }
  ]);

  // Pagination
  first = signal(0);
  rows = signal(5);
  totalRecords = signal(2);

  // Search
  searchText = signal('');

  // Table columns
  cols = [
    { field: 'cod', header: 'Cod.' },
    { field: 'client', header: 'Client' },
    { field: 'vessel', header: 'Vessel' },
    { field: 'port', header: 'Port' },
    { field: 'cargo', header: 'Cargo' },
    { field: 'voyage', header: 'Voyage' },
    { field: 'callStatus', header: 'Call Status' },
    { field: 'pdaStatus', header: 'PDA Status' },
    { field: 'lastUpdate', header: 'Last Upd.' },
    { field: 'balance', header: 'Balance' },
    { field: 'actions', header: 'Actions' }
  ];

  // Methods
  onPageChange(event: any) {
    this.first.set(event.first);
    this.rows.set(event.rows);
  }

  getStatusSeverity(status: string): string {
    switch (status) {
      case 'ESTIMATED':
      case 'OPEN':
        return 'warning';
      case 'ARRIVED':
      case 'CLOSED':
        return 'success';
      default:
        return 'secondary';
    }
  }

  getBalanceSeverity(balance: string): string {
    if (balance.startsWith('-')) {
      return 'danger';
    } else if (balance.startsWith('+')) {
      return 'success';
    }
    return 'secondary';
  }

  onSearch(event: any) {
    this.searchText.set(event.target.value);
  }

  onDownload() {
    console.log('Download clicked');
  }

  onUpload() {
    console.log('Upload clicked');
  }

  onSettings() {
    console.log('Settings clicked');
  }

  onFilter() {
    console.log('Filter clicked');
  }

  onGrid() {
    console.log('Grid view clicked');
  }

  onNew() {
    console.log('New PDA clicked');
  }

  onEdit(record: PDARecord) {
    console.log('Edit clicked for:', record.cod);
  }

  onDelete(record: PDARecord) {
    console.log('Delete clicked for:', record.cod);
  }
} 
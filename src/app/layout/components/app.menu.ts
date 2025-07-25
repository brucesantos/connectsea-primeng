import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li
                app-menuitem
                *ngIf="!item.separator"
                [item]="item"
                [index]="i"
                [root]="true"
            ></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `,
})
export class AppMenu {
    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Quotations',
                icon: 'pi pi-dollar',
                items: [
                    { label: 'Quotations', icon: 'pi pi-dollar' },
                    { label: 'Templates', icon: 'pi pi-file' },
                    { label: 'Clients', icon: 'pi pi-users' },
                    { label: 'Configurations', icon: 'pi pi-cog' },
                ],
            },
            {
                label: 'Proforma DAs',
                icon: 'pi pi-file',
                items: [
                    { label: 'PDAs', icon: 'pi pi-list' },
                    { label: 'Expenses', icon: 'pi pi-file' },
                    { label: 'Remittances', icon: 'pi pi-refresh' },
                    { label: 'Configurations', icon: 'pi pi-cog' },
                ],
            },
            {
                label: 'Disbursement Accounts',
                icon: 'pi pi-file',
                items: [
                    { label: 'DAs', icon: 'pi pi-file' },
                    { label: 'Debit Notes', icon: 'pi pi-file' },
                    { label: 'Periodic DAs', icon: 'pi pi-calendar' },
                ],
            },
        ];
    }
}

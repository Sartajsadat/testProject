import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Redux } from '../../model/redux.model';
import { addRedux,updateRedux,deleteRedux } from '../../store/redux/redux.actions';
import { ReduxState } from '../../store/redux/redux.state';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ReduxComponent {
  addReduxForm: FormGroup;
  editReduxForm: FormGroup;
  redux$: Observable<Redux[]>;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ redux: ReduxState }>,
    private modalService: NgbModal
  ) {
    this.redux$ = this.store.pipe(select(state => state.redux.redux));
    this.addReduxForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
    this.editReduxForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  openAddReduxModal(content: any) {
    this.modalService.open(content);
  }

  openEditReduxModal(content: any, redux: Redux) {
    this.editReduxForm.setValue({
      id: redux.id,
      name: redux.name,
      age: redux.age,
      address: redux.address,
      phoneNumber: redux.phoneNumber
    });
    this.modalService.open(content);
  }

  onSubmit(modal: any) {
    if (this.addReduxForm.valid) {
      this.store.dispatch(addRedux({ redux: this.addReduxForm.value }));
      modal.close();
      this.addReduxForm.reset();
    }
  }

  onEditSubmit(modal: any) {
    if (this.editReduxForm.valid) {
      this.store.dispatch(updateRedux({ redux: this.editReduxForm.value }));
      modal.close();
      this.editReduxForm.reset();
    }
  }

  onDelete(id: number) {
    this.store.dispatch(deleteRedux({ id }));
  }
}
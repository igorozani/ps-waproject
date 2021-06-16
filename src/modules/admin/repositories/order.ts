import { Injectable } from '@nestjs/common';
import { IOrderParams } from 'modules/common/interfaces/IOrderParams';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/order';
import { Transaction } from 'objection';

@Injectable()
export class OrderRepository {
  public async list(params: IOrderParams, transaction?: Transaction): Promise<Order[]> {
    let query = Order.query(transaction).select('*');
    return query;
  }

  public async findById(id: number, transaction?: Transaction): Promise<Order> {
    return Order.query(transaction)
      .where({ id })
      .first();
  }

  public async insert(model: IOrder, transaction?: Transaction): Promise<Order> {
    return Order.query(transaction).insert(model);
  }
}

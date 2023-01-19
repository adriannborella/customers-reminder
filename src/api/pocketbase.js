import PocketBase from 'pocketbase';

const pb = new PocketBase('http://129.151.117.160:9097');

export const getData = async () => {
    const result = await pb.collection('customers').getList(1, 50, {});
    return result
}

export const getOne = async (id) => {
    const result = await pb.collection('customers').getOne(id);
    return result
}


export const Create = async(data) => {await pb.collection('customers').create(data);}

export const Update = async(data) => {await pb.collection('customers').update(data.id, data);}

export const Delete = async (id) => {await pb.collection('customers').delete(id);}


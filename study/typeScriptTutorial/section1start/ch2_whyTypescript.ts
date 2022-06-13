// 객체의 모양 정의
interface Product{
    id: number,
    name: string,
    price: number
};

// Product로 사용할 반환유형 명시하기
function getProduct(id) : Product{
    return {
        id: id,
        name: `Awesome Gadget ${id}`,
        price: 99.5
    }
}

const showProduct = (name:string, price:number)  => {
    console.log(`The product ${name} costs ${price}$.`);
};


/* ESTRUCTURA */
/* DEFINIENDO EL NODO */
function Node(value) {
    this.left = null;
    this.right = null;
    this.value = value;
}
/* DECLARAR NODOS */
const root = new Node(6);
const node1 = new Node(4);
const node2 = new Node(1);
const node3 = new Node(5);
const node4 = new Node(8);
const node5 = new Node(9);
/* DEFINIR IZQUIERDA Y DERECHA */
root.left = node1;
root.right = node4;

node1.left = node2;
node1.right = node3;

node4.right = node5;
/* FUNCIONES */
/* EN ORDEN */
function inorder(node) {
    if (node === null) { /* CONDICIONAL DE SALIDA */
        return;
    } /* RECORRIDOS */
    inorder(node.left);
    console.log(node.value);
    inorder(node.right);
}
/* CONSOLA */
console.log("En orden:");
inorder(root);
/* PREORDEN */
function preorder(node) {
    if (node === null) {
        return;
    } /* RECORRIDOS */
    console.log(node.value);
    preorder(node.left);
    preorder(node.right);
}
/* CONSOLA */
console.log("En preorden:");
preorder(root);
/* POST ORDEN */
function postorder(node) {
    if (node === null) { /* CONDICIONAL DE SALIDA */
        return;
    } /* RECORRIDOS */
    postorder(node.left);
    postorder(node.right);
    console.log(node.value);
}
/* CONSOLA */
console.log("En post orden:");
postorder(root);
/* INSERTAR DATO */
function insert(node, value) {
    if (node === null) { /* CONDICIONAL DE SALIDA */
        return;
    }
    if (value >= node.value) { /* ES MAYOR */
        if (node.right === null) {
            const newNode = new Node(value);
            node.right = newNode;
        } else {
            insert(node.right, value)
        }
    } else if (value <= node.value) { /* ES MENOR */
        if (node.left === null) {
            const newNode = new Node(value);
            node.left = newNode;
        } else {
            insert(node.left, value);
        }
    }
}
/* CONSOLA */
insert(root, 7);
console.log("En orden:");
inorder(root);
/* BUSCAR DATO */
function find(node, value) {
    if (node === null) { /* CONDICIONAL DE SALIDA */
        return null;
    }
    if (node.value === value) {
        return node;
    }
    const left = find(node.left, value);
    const right = find(node.right, value);
    return left || right;
}
/* CONSOLA */
console.log("Busqueda: (Buscado, menor, mayor)");
const res = find(root, 8);
console.log(res.value, res.left.value, res.right.value);
console.log("Busqueda: (menor, buscado, mayor)");
console.log(res.left.value, res.value, res.right.value);
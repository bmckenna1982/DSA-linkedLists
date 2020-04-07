const LinkedList = require('./linkedList')

function main() {
  const SSL = new LinkedList()

  SSL.insertFirst('Apollo')
  SSL.insertFirst('Boomer')
  SSL.insertFirst('Helo')
  SSL.insertFirst('Husker')
  SSL.insertFirst('Starbuck')
  SSL.insertFirst('Tauhida')
  SSL.remove('Husker')

  SSL.insertBefore('Before', 'Helo')
  return SSL
}

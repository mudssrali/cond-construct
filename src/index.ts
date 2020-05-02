export interface Cond {
	(pairs: CondItem, options?: CondOptions): unknown
}
type CondItem = Array<[boolean | number | '', unknown | (() => unknown)]>
type CondOptions = { strict: boolean }

const defaults = {
	strict: true
}

const cond: Cond = (pairs, options = defaults) => {

	const match = pairs.find(([predicate]) => {
		return options.strict ? predicate === true : predicate
	})

	if (!match) return null

	return typeof match[1] === 'function' ? match[1]() : match[1]
}

export default cond
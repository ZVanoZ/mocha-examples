var
	TestedClass = {
		name: 'TestedClass',
		getName() {
			return this.name;
		}
	},
	functionGetTestedClassName = () => {
		const result = TestedClass.getName();
		return result;
	}
;


export {TestedClass, functionGetTestedClassName};
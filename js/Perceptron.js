class Perceptron {

	constructor(size, learningRate, iterarions){
		this.weights = Array(++size).fill(0);
		this.lr = learningRate || 0.01;
		this.it = iterarions || 10;
	}

	predict(inputs){
		let activation = this.weights[0];
		for(let i = 0; i < inputs.length; i++){
			activation += this.weights[i+1] * inputs[i];
		}
		return activation >= 0 ? 1 : 0;
	}
	
	fit(input, target){
		let prediction, error, it = 0;
		while(it < this.it){
			for(let i=0; i < input.length; i++){
				prediction = this.predict( input[i] );
				error = target[i] - prediction;
				this.weights[0] += this.lr * error;
				for(let j=0; j < input[i].length; j++){
					this.weights[j+1] += this.lr * error * input[i][j];
				}
			}
			it += 1;
		}
	}

}

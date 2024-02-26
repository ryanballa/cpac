<script>
	let formError = false;
	import SocialIcons from './SocialIcons.svelte';

	let email = '';
	let submitted = false;

	async function handleSubmit(event) {
		const formData = new FormData(event.target);

		email = formData.get('email');

		let result = await fetch('/api/register-email', {
			method: 'post',
			body: JSON.stringify({ email }),
			headers: {
				'x-sveltekit-action': true
			}
		});
		const registerEmailResponse = await result.json();
		if (registerEmailResponse.status === 'subscribed') {
			email = '';
			formError = false;
			submitted = true;
		} else {
			formError = true;
		}
	}
</script>

<footer>
	<section class="p-section">
		<div class="row--25-25-50">
			<div class="col">
				<h5 class="p-heading--3">Connect With Us</h5>
				<SocialIcons />
			</div>
			<div class="col">
				<h5 class="p-heading--3">Clarendon Park Community Center</h5>
				<p>4501 N Clarendon Ave<br />Chicago, IL 60640</p>
			</div>
			<div class="col">
				<h5 class="p-heading--3">Join our Email List</h5>
				{#if !submitted}<form on:submit|preventDefault={handleSubmit}>
						<div class="p-form-validation">
							<label for="exampleInputEmail1">Email address</label>
							<input
								class={formError ? 'is-invalid' : ''}
								aria-invalid="false"
								aria-describedby="emailInputErrorMessage"
								type="email"
								id="exampleInputEmail1"
								name="email"
								placeholder="example@gmail.com"
								autocomplete="off"
								required
							/>
							<p
								class="p-form-validation__message {formError ? '' : 'u-hide'}"
								id="emailInputErrorMessage"
							>
								<i class="p-icon p-icon--error" />You are already signed up.
							</p>
						</div>
						<button type="submit" name="submit" class="p-button--brand is-processing">Submit</button
						>
					</form>
				{:else}
					<p class="p-form-validation__message">
						<i class="p-icon p-icon--success" />You are signed up!
					</p>
				{/if}
			</div>
		</div>
	</section>
	<div class="u-fixed-width">
		<div class="row">
			<hr class="p-rule" />
		</div>
	</div>
	<section class="p-strip is-shallow u-no-padding--bottom sub-footer">
		<div class="row">
			<h6 class="p-heading--4">Organization</h6>
			<nav>
				<ul class="p-inline-list">
					<li class="p-inline-list__item"><a href="/about-us">About Us</a></li>
					<li class="p-inline-list__item"><a href="/get-involved">Get Involved</a></li>
					<li class="p-inline-list__item"><a href="/press">Press</a></li>
					<li class="p-inline-list__item"><a href="/contact-us">Contact Us</a></li>
				</ul>
			</nav>
		</div>
	</section>
	<section class="p-section end-section sub-footer">
		<div class="row">
			<div class="col-12">
				<p class="u-no-max-width copyright">
					<small>&copy; 2024 Clarendon Park Advisory Council</small>
				</p>
			</div>
		</div>
	</section>
</footer>

<style lang="scss">
	footer {
		background-color: var(--color-dark-positive);
		color: #dfdfdf;
		padding-top: 1em;

		a:link,
		a:visited,
		a:hover {
			color: #a8ccf1;
		}

		& .sub-footer {
			background-color: #101f2f;
		}

		& .col {
			padding-bottom: var(--sp-medium);
		}

		& .copyright {
			text-align: center;
		}

		& .p-form-validation__message {
			& .p-icon {
				margin-right: 0.5em;
			}
			padding-left: 0;
		}

		& .p-section.end-section {
			padding-bottom: 0;

			& p {
				margin: 0;
				padding: var(--sp-large);
			}
		}

		& input[type='email'] {
			background: $color-form-bg;
			border: 2px solid $color-brand;
			border-radius: 2px;
		}

		& input[type='email'].is-invalid {
			border-color: $color-negative;
		}
	}
</style>

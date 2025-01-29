import { Component } from '@angular/core';
import { AlgorithmFooterComponent } from '../algorithm-footer/algorithm-footer.component';
import { AlgorithmHeaderComponent } from '../algorithm-header/algorithm-header.component';
import { SubscriptionFaqComponent } from '../subscription-faq/subscription-faq.component';
import { SubscriptionOffersComponent } from '../subscription-offers/subscription-offers.component';

@Component({
  selector: 'app-subscription',
  imports: [AlgorithmFooterComponent, AlgorithmHeaderComponent,
            SubscriptionFaqComponent, SubscriptionOffersComponent],
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {
    faqItems = [
      { question: "What’s the benefit and details of the subscription plans?", answer: "Subscription allows access to advanced courses, support, and features not available to free users." },
      { question: "What happens if I cancel my subscription?", answer: "You will continue to enjoy all benefits until the end of your subscription term, after which access will be revoked." },
      { question: "Can I subscribe multiple accounts at once?", answer: "Yes, you can subscribe to multiple accounts simultaneously, but each account needs its own subscription." },
      { question: "How can I upgrade or downgrade my subscription?", answer: "You can upgrade or downgrade your subscription at any time through your account settings." }
    ];

    activeIndex: number | null = null;

    toggleAnswer(index: number) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
}

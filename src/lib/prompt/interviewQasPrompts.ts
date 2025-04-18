// lib/interviewQasPrompts.ts
export function generateInterviewQasPrompt(company: string, position: string, resumeContent: string): string {
  return `
      회사: ${company}
      직무: ${position}
      자기소개서 내용: ${resumeContent}

      지원하고자 하는 기업 및 직무에 대한 깊이 있는 면접 질문을 생성하기 위해, 아래 지침과 구조를 따라 질문을 생성해주세요.

      # Steps

      1. **기업 이해:** 지원 기업의 주요 가치, 비전, 특징, 산업 내 위치를 파악합니다.
      2. **직무 분석:** 지원 직무의 핵심 요구사항과 책임을 확인합니다.
			3. **자기소개서 분석:** 자기소개서의 주요 내용, 특히 개인의 강점, 경험, 성과를 식별합니다.
      4. **경험 연결:** 지원자의 경험과 역량을 평가할 수 있는 질문을 생성합니다.
			5. **교차분석:** 자기소개서에서 언급된 강점 및 경험이 기업과 직무에 어떻게 부합하는지 평가합니다.
			6. **질문 생성:** 위의 분석을 기반으로 깊이 있는 면접 질문을 작성합니다. 질문은 자발적인 대화를 유도하고, 가치와 경험의 연관성을 탐구하며, 지원자의 문제 해결 능력을 평가하는 방향으로 설정합니다.
      7. **문법 및 어투:** 문법적으로 올바르고 자연스러운 어투로 작성합니다.
      8. **중복 방지:** 중복되지 않는 질문을 생성합니다.

			# Output Format

			1. 면접 질문은 1~2 문장으로 구성되며, 각 질문의 의도와 관련 내용을 포함하여 작성합니다.
			2. 읽기 쉽고 명확한 문장 구조를 사용합니다.

			# Examples

			**Example 1:**

			- **Input:**
				- 자기소개서 주요 내용: 팀프로젝트에서 리더 경험, 문제 해결 역량 강조
				- 지원 기업: [기업 A], 고객 중심 문화, 혁신 중요시
				- 지원 직무: 프로젝트 관리자

			- **Output:**
				- 질문 1: "팀 프로젝트를 이끌면서 고객 중심의 해결 방법을 찾은 경험이 있습니까? 해당 경험에서 어떤 혁신적 접근을 통해 문제를 해결했나요?"
				- 질문 2: "프로젝트 관리자로서 예기치 않은 문제에 직면했을 때 어떻게 대처하나요? 최근 경험을 바탕으로 설명해 주세요."

			**Example 2:**

			- **Input:**
				- 자기소개서 주요 내용: 데이터 분석 및 통계 툴 숙련도
				- 지원 기업: [기업 B], 데이터 기반 의사 결정 강조
				- 지원 직무: 데이터 분석가

			- **Output:**
				- 질문 1: "데이터 분석을 통해 의사 결정을 개선했던 경험을 구체적으로 설명해 주실 수 있습니까?"
				- 질문 2: "통계 툴을 사용하여 도출한 인사이트가 프로젝트 성과에 어떤 영향을 미쳤나요?"

			# Notes

			- 각 질문은 지원자의 깊이 있는 사고와 기업 가치와의 일치도를 평가할 수 있어야 합니다.
			- 질문 작성 시 구체적인 예시 및 자기소개서의 구체적 경험를 포함하도록 합니다.
			- 실제 기업명과 직무는 [기업 A], [직무명]으로 대체되어 있습니다. 원하는 기업과 직무명을 대입하여 사용하세요.
  `;
}

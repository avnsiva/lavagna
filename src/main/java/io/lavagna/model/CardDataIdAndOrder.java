/**
 * This file is part of lavagna.
 *
 * lavagna is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * lavagna is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with lavagna.  If not, see <http://www.gnu.org/licenses/>.
 */
package io.lavagna.model;

import ch.digitalfondue.npjt.ConstructorAnnotationRowMapper.Column;


public class CardDataIdAndOrder extends Pair<Integer, Integer> {
	public CardDataIdAndOrder(@Column("CARD_DATA_ID") int first, @Column("CARD_DATA_ORDER") int second) {
		super(first, second);
	}
}

# `policyInfo` Submodule <a name="`policyInfo` Submodule" id="@cdktn/provider-databricks.policyInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyInfo <a name="PolicyInfo" id="@cdktn/provider-databricks.policyInfo.PolicyInfo"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info databricks_policy_info}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfo(scope: Construct, id: string, config: PolicyInfoConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig">PolicyInfoConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig">PolicyInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.putColumnMask">putColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.putGrant">putGrant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.putMatchColumns">putMatchColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.putRowFilter">putRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetColumnMask">resetColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetExceptPrincipals">resetExceptPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetGrant">resetGrant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetMatchColumns">resetMatchColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetOnSecurableFullname">resetOnSecurableFullname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetOnSecurableType">resetOnSecurableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetRowFilter">resetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.resetWhenCondition">resetWhenCondition</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumnMask` <a name="putColumnMask" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.putColumnMask"></a>

```typescript
public putColumnMask(value: PolicyInfoColumnMask): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.putColumnMask.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a>

---

##### `putGrant` <a name="putGrant" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.putGrant"></a>

```typescript
public putGrant(value: PolicyInfoGrant): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.putGrant.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrant">PolicyInfoGrant</a>

---

##### `putMatchColumns` <a name="putMatchColumns" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.putMatchColumns"></a>

```typescript
public putMatchColumns(value: IResolvable | PolicyInfoMatchColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.putMatchColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.putProviderConfig"></a>

```typescript
public putProviderConfig(value: PolicyInfoProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfig">PolicyInfoProviderConfig</a>

---

##### `putRowFilter` <a name="putRowFilter" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.putRowFilter"></a>

```typescript
public putRowFilter(value: PolicyInfoRowFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a>

---

##### `resetColumnMask` <a name="resetColumnMask" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetColumnMask"></a>

```typescript
public resetColumnMask(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetExceptPrincipals` <a name="resetExceptPrincipals" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetExceptPrincipals"></a>

```typescript
public resetExceptPrincipals(): void
```

##### `resetGrant` <a name="resetGrant" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetGrant"></a>

```typescript
public resetGrant(): void
```

##### `resetMatchColumns` <a name="resetMatchColumns" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetMatchColumns"></a>

```typescript
public resetMatchColumns(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOnSecurableFullname` <a name="resetOnSecurableFullname" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetOnSecurableFullname"></a>

```typescript
public resetOnSecurableFullname(): void
```

##### `resetOnSecurableType` <a name="resetOnSecurableType" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetOnSecurableType"></a>

```typescript
public resetOnSecurableType(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetRowFilter` <a name="resetRowFilter" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetRowFilter"></a>

```typescript
public resetRowFilter(): void
```

##### `resetWhenCondition` <a name="resetWhenCondition" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.resetWhenCondition"></a>

```typescript
public resetWhenCondition(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PolicyInfo resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.isConstruct"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

policyInfo.PolicyInfo.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.isTerraformElement"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

policyInfo.PolicyInfo.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.isTerraformResource"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

policyInfo.PolicyInfo.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

policyInfo.PolicyInfo.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PolicyInfo resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PolicyInfo to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PolicyInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PolicyInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.columnMask">columnMask</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference">PolicyInfoColumnMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.grant">grant</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference">PolicyInfoGrantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.matchColumns">matchColumns</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList">PolicyInfoMatchColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference">PolicyInfoProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference">PolicyInfoRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.updatedAt">updatedAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.columnMaskInput">columnMaskInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.exceptPrincipalsInput">exceptPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.forSecurableTypeInput">forSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.grantInput">grantInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrant">PolicyInfoGrant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.matchColumnsInput">matchColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.onSecurableFullnameInput">onSecurableFullnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.onSecurableTypeInput">onSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfig">PolicyInfoProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.rowFilterInput">rowFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.toPrincipalsInput">toPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.whenConditionInput">whenConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.exceptPrincipals">exceptPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.forSecurableType">forSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.toPrincipals">toPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.whenCondition">whenCondition</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `columnMask`<sup>Required</sup> <a name="columnMask" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.columnMask"></a>

```typescript
public readonly columnMask: PolicyInfoColumnMaskOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference">PolicyInfoColumnMaskOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `grant`<sup>Required</sup> <a name="grant" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.grant"></a>

```typescript
public readonly grant: PolicyInfoGrantOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference">PolicyInfoGrantOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchColumns`<sup>Required</sup> <a name="matchColumns" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.matchColumns"></a>

```typescript
public readonly matchColumns: PolicyInfoMatchColumnsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList">PolicyInfoMatchColumnsList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.providerConfig"></a>

```typescript
public readonly providerConfig: PolicyInfoProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference">PolicyInfoProviderConfigOutputReference</a>

---

##### `rowFilter`<sup>Required</sup> <a name="rowFilter" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.rowFilter"></a>

```typescript
public readonly rowFilter: PolicyInfoRowFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference">PolicyInfoRowFilterOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.updatedAt"></a>

```typescript
public readonly updatedAt: number;
```

- *Type:* number

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `columnMaskInput`<sup>Optional</sup> <a name="columnMaskInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.columnMaskInput"></a>

```typescript
public readonly columnMaskInput: IResolvable | PolicyInfoColumnMask;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `exceptPrincipalsInput`<sup>Optional</sup> <a name="exceptPrincipalsInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.exceptPrincipalsInput"></a>

```typescript
public readonly exceptPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `forSecurableTypeInput`<sup>Optional</sup> <a name="forSecurableTypeInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.forSecurableTypeInput"></a>

```typescript
public readonly forSecurableTypeInput: string;
```

- *Type:* string

---

##### `grantInput`<sup>Optional</sup> <a name="grantInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.grantInput"></a>

```typescript
public readonly grantInput: IResolvable | PolicyInfoGrant;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrant">PolicyInfoGrant</a>

---

##### `matchColumnsInput`<sup>Optional</sup> <a name="matchColumnsInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.matchColumnsInput"></a>

```typescript
public readonly matchColumnsInput: IResolvable | PolicyInfoMatchColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `onSecurableFullnameInput`<sup>Optional</sup> <a name="onSecurableFullnameInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.onSecurableFullnameInput"></a>

```typescript
public readonly onSecurableFullnameInput: string;
```

- *Type:* string

---

##### `onSecurableTypeInput`<sup>Optional</sup> <a name="onSecurableTypeInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.onSecurableTypeInput"></a>

```typescript
public readonly onSecurableTypeInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | PolicyInfoProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfig">PolicyInfoProviderConfig</a>

---

##### `rowFilterInput`<sup>Optional</sup> <a name="rowFilterInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.rowFilterInput"></a>

```typescript
public readonly rowFilterInput: IResolvable | PolicyInfoRowFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a>

---

##### `toPrincipalsInput`<sup>Optional</sup> <a name="toPrincipalsInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.toPrincipalsInput"></a>

```typescript
public readonly toPrincipalsInput: string[];
```

- *Type:* string[]

---

##### `whenConditionInput`<sup>Optional</sup> <a name="whenConditionInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.whenConditionInput"></a>

```typescript
public readonly whenConditionInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `exceptPrincipals`<sup>Required</sup> <a name="exceptPrincipals" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.exceptPrincipals"></a>

```typescript
public readonly exceptPrincipals: string[];
```

- *Type:* string[]

---

##### `forSecurableType`<sup>Required</sup> <a name="forSecurableType" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.forSecurableType"></a>

```typescript
public readonly forSecurableType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `onSecurableFullname`<sup>Required</sup> <a name="onSecurableFullname" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

---

##### `onSecurableType`<sup>Required</sup> <a name="onSecurableType" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `toPrincipals`<sup>Required</sup> <a name="toPrincipals" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.toPrincipals"></a>

```typescript
public readonly toPrincipals: string[];
```

- *Type:* string[]

---

##### `whenCondition`<sup>Required</sup> <a name="whenCondition" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.whenCondition"></a>

```typescript
public readonly whenCondition: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfo.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.policyInfo.PolicyInfo.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyInfoColumnMask <a name="PolicyInfoColumnMask" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoColumnMask: policyInfo.PolicyInfoColumnMask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#function_name PolicyInfo#function_name}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask.property.onColumn">onColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#on_column PolicyInfo#on_column}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask.property.using">using</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#using PolicyInfo#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#function_name PolicyInfo#function_name}.

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask.property.onColumn"></a>

```typescript
public readonly onColumn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#on_column PolicyInfo#on_column}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask.property.using"></a>

```typescript
public readonly using: IResolvable | PolicyInfoColumnMaskUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#using PolicyInfo#using}.

---

### PolicyInfoColumnMaskUsing <a name="PolicyInfoColumnMaskUsing" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoColumnMaskUsing: policyInfo.PolicyInfoColumnMaskUsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#alias PolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.property.constant">constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#constant PolicyInfo#constant}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression">PolicyInfoColumnMaskUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#function_arg_expression PolicyInfo#function_arg_expression}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#alias PolicyInfo#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#constant PolicyInfo#constant}.

---

##### `functionArgExpression`<sup>Optional</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing.property.functionArgExpression"></a>

```typescript
public readonly functionArgExpression: PolicyInfoColumnMaskUsingFunctionArgExpression;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression">PolicyInfoColumnMaskUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#function_arg_expression PolicyInfo#function_arg_expression}.

---

### PolicyInfoColumnMaskUsingFunctionArgExpression <a name="PolicyInfoColumnMaskUsingFunctionArgExpression" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoColumnMaskUsingFunctionArgExpression: policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_introspection PolicyInfo#tag_introspection}. |

---

##### `tagIntrospection`<sup>Optional</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression.property.tagIntrospection"></a>

```typescript
public readonly tagIntrospection: PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_introspection PolicyInfo#tag_introspection}.

---

### PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection <a name="PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection: policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#column_tag_value PolicyInfo#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_value PolicyInfo#tag_value}. |

---

##### `columnTagValue`<sup>Optional</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```typescript
public readonly columnTagValue: PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#column_tag_value PolicyInfo#column_tag_value}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```typescript
public readonly tagValue: PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_value PolicyInfo#tag_value}.

---

### PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue: policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">columnAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#column_alias PolicyInfo#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_key PolicyInfo#tag_key}. |

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```typescript
public readonly columnAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#column_alias PolicyInfo#column_alias}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_key PolicyInfo#tag_key}.

---

### PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue <a name="PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue: policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_key PolicyInfo#tag_key}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_key PolicyInfo#tag_key}.

---

### PolicyInfoConfig <a name="PolicyInfoConfig" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoConfig: policyInfo.PolicyInfoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.forSecurableType">forSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#for_securable_type PolicyInfo#for_securable_type}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#policy_type PolicyInfo#policy_type}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.toPrincipals">toPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#to_principals PolicyInfo#to_principals}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.columnMask">columnMask</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#column_mask PolicyInfo#column_mask}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#comment PolicyInfo#comment}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.exceptPrincipals">exceptPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#except_principals PolicyInfo#except_principals}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.grant">grant</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrant">PolicyInfoGrant</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#grant PolicyInfo#grant}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.matchColumns">matchColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#match_columns PolicyInfo#match_columns}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#name PolicyInfo#name}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.onSecurableFullname">onSecurableFullname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#on_securable_fullname PolicyInfo#on_securable_fullname}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.onSecurableType">onSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#on_securable_type PolicyInfo#on_securable_type}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfig">PolicyInfoProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#provider_config PolicyInfo#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.rowFilter">rowFilter</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#row_filter PolicyInfo#row_filter}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.whenCondition">whenCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#when_condition PolicyInfo#when_condition}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `forSecurableType`<sup>Required</sup> <a name="forSecurableType" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.forSecurableType"></a>

```typescript
public readonly forSecurableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#for_securable_type PolicyInfo#for_securable_type}.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#policy_type PolicyInfo#policy_type}.

---

##### `toPrincipals`<sup>Required</sup> <a name="toPrincipals" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.toPrincipals"></a>

```typescript
public readonly toPrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#to_principals PolicyInfo#to_principals}.

---

##### `columnMask`<sup>Optional</sup> <a name="columnMask" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.columnMask"></a>

```typescript
public readonly columnMask: PolicyInfoColumnMask;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#column_mask PolicyInfo#column_mask}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#comment PolicyInfo#comment}.

---

##### `exceptPrincipals`<sup>Optional</sup> <a name="exceptPrincipals" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.exceptPrincipals"></a>

```typescript
public readonly exceptPrincipals: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#except_principals PolicyInfo#except_principals}.

---

##### `grant`<sup>Optional</sup> <a name="grant" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.grant"></a>

```typescript
public readonly grant: PolicyInfoGrant;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrant">PolicyInfoGrant</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#grant PolicyInfo#grant}.

---

##### `matchColumns`<sup>Optional</sup> <a name="matchColumns" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.matchColumns"></a>

```typescript
public readonly matchColumns: IResolvable | PolicyInfoMatchColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#match_columns PolicyInfo#match_columns}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#name PolicyInfo#name}.

---

##### `onSecurableFullname`<sup>Optional</sup> <a name="onSecurableFullname" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.onSecurableFullname"></a>

```typescript
public readonly onSecurableFullname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#on_securable_fullname PolicyInfo#on_securable_fullname}.

---

##### `onSecurableType`<sup>Optional</sup> <a name="onSecurableType" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.onSecurableType"></a>

```typescript
public readonly onSecurableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#on_securable_type PolicyInfo#on_securable_type}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: PolicyInfoProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfig">PolicyInfoProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#provider_config PolicyInfo#provider_config}.

---

##### `rowFilter`<sup>Optional</sup> <a name="rowFilter" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.rowFilter"></a>

```typescript
public readonly rowFilter: PolicyInfoRowFilter;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#row_filter PolicyInfo#row_filter}.

---

##### `whenCondition`<sup>Optional</sup> <a name="whenCondition" id="@cdktn/provider-databricks.policyInfo.PolicyInfoConfig.property.whenCondition"></a>

```typescript
public readonly whenCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#when_condition PolicyInfo#when_condition}.

---

### PolicyInfoGrant <a name="PolicyInfoGrant" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrant.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoGrant: policyInfo.PolicyInfoGrant = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrant.property.privileges">privileges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#privileges PolicyInfo#privileges}. |

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrant.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#privileges PolicyInfo#privileges}.

---

### PolicyInfoMatchColumns <a name="PolicyInfoMatchColumns" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoMatchColumns: policyInfo.PolicyInfoMatchColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#alias PolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns.property.condition">condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#condition PolicyInfo#condition}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#alias PolicyInfo#alias}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#condition PolicyInfo#condition}.

---

### PolicyInfoProviderConfig <a name="PolicyInfoProviderConfig" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfig.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoProviderConfig: policyInfo.PolicyInfoProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#workspace_id PolicyInfo#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#workspace_id PolicyInfo#workspace_id}.

---

### PolicyInfoRowFilter <a name="PolicyInfoRowFilter" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoRowFilter: policyInfo.PolicyInfoRowFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#function_name PolicyInfo#function_name}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter.property.using">using</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#using PolicyInfo#using}. |

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#function_name PolicyInfo#function_name}.

---

##### `using`<sup>Optional</sup> <a name="using" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter.property.using"></a>

```typescript
public readonly using: IResolvable | PolicyInfoRowFilterUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#using PolicyInfo#using}.

---

### PolicyInfoRowFilterUsing <a name="PolicyInfoRowFilterUsing" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoRowFilterUsing: policyInfo.PolicyInfoRowFilterUsing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.property.alias">alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#alias PolicyInfo#alias}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.property.constant">constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#constant PolicyInfo#constant}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression">PolicyInfoRowFilterUsingFunctionArgExpression</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#function_arg_expression PolicyInfo#function_arg_expression}. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#alias PolicyInfo#alias}.

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#constant PolicyInfo#constant}.

---

##### `functionArgExpression`<sup>Optional</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing.property.functionArgExpression"></a>

```typescript
public readonly functionArgExpression: PolicyInfoRowFilterUsingFunctionArgExpression;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression">PolicyInfoRowFilterUsingFunctionArgExpression</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#function_arg_expression PolicyInfo#function_arg_expression}.

---

### PolicyInfoRowFilterUsingFunctionArgExpression <a name="PolicyInfoRowFilterUsingFunctionArgExpression" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoRowFilterUsingFunctionArgExpression: policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_introspection PolicyInfo#tag_introspection}. |

---

##### `tagIntrospection`<sup>Optional</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression.property.tagIntrospection"></a>

```typescript
public readonly tagIntrospection: PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_introspection PolicyInfo#tag_introspection}.

---

### PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection <a name="PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoRowFilterUsingFunctionArgExpressionTagIntrospection: policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#column_tag_value PolicyInfo#column_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_value PolicyInfo#tag_value}. |

---

##### `columnTagValue`<sup>Optional</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.columnTagValue"></a>

```typescript
public readonly columnTagValue: PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#column_tag_value PolicyInfo#column_tag_value}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection.property.tagValue"></a>

```typescript
public readonly tagValue: PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_value PolicyInfo#tag_value}.

---

### PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue <a name="PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue: policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias">columnAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#column_alias PolicyInfo#column_alias}. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_key PolicyInfo#tag_key}. |

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.columnAlias"></a>

```typescript
public readonly columnAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#column_alias PolicyInfo#column_alias}.

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_key PolicyInfo#tag_key}.

---

### PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue <a name="PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

const policyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue: policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_key PolicyInfo#tag_key}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.131.0/docs/resources/policy_info#tag_key PolicyInfo#tag_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyInfoColumnMaskOutputReference <a name="PolicyInfoColumnMaskOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoColumnMaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.putUsing"></a>

```typescript
public putUsing(value: IResolvable | PolicyInfoColumnMaskUsing[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]

---

##### `resetUsing` <a name="resetUsing" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.resetUsing"></a>

```typescript
public resetUsing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.using">using</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList">PolicyInfoColumnMaskUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.onColumnInput">onColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.usingInput">usingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.onColumn">onColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.using"></a>

```typescript
public readonly using: PolicyInfoColumnMaskUsingList;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList">PolicyInfoColumnMaskUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `onColumnInput`<sup>Optional</sup> <a name="onColumnInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.onColumnInput"></a>

```typescript
public readonly onColumnInput: string;
```

- *Type:* string

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.usingInput"></a>

```typescript
public readonly usingInput: IResolvable | PolicyInfoColumnMaskUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `onColumn`<sup>Required</sup> <a name="onColumn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.onColumn"></a>

```typescript
public readonly onColumn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoColumnMask;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMask">PolicyInfoColumnMask</a>

---


### PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference <a name="PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection">putTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection">resetTagIntrospection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagIntrospection` <a name="putTagIntrospection" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```typescript
public putTagIntrospection(value: PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---

##### `resetTagIntrospection` <a name="resetTagIntrospection" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```typescript
public resetTagIntrospection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">tagIntrospectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression">PolicyInfoColumnMaskUsingFunctionArgExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagIntrospection`<sup>Required</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```typescript
public readonly tagIntrospection: PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `tagIntrospectionInput`<sup>Optional</sup> <a name="tagIntrospectionInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```typescript
public readonly tagIntrospectionInput: IResolvable | PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoColumnMaskUsingFunctionArgExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression">PolicyInfoColumnMaskUsingFunctionArgExpression</a>

---


### PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">columnAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">columnAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnAliasInput`<sup>Optional</sup> <a name="columnAliasInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```typescript
public readonly columnAliasInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```typescript
public readonly columnAlias: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---


### PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">putColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">putTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">resetColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnTagValue` <a name="putColumnTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```typescript
public putColumnTagValue(value: PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `putTagValue` <a name="putTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```typescript
public putTagValue(value: PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `resetColumnTagValue` <a name="resetColumnTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```typescript
public resetColumnTagValue(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">columnTagValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnTagValue`<sup>Required</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```typescript
public readonly columnTagValue: PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `columnTagValueInput`<sup>Optional</sup> <a name="columnTagValueInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```typescript
public readonly columnTagValueInput: IResolvable | PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: IResolvable | PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospection</a>

---


### PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoColumnMaskUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---


### PolicyInfoColumnMaskUsingList <a name="PolicyInfoColumnMaskUsingList" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoColumnMaskUsingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.get"></a>

```typescript
public get(index: number): PolicyInfoColumnMaskUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoColumnMaskUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>[]

---


### PolicyInfoColumnMaskUsingOutputReference <a name="PolicyInfoColumnMaskUsingOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoColumnMaskUsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression">putFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resetFunctionArgExpression">resetFunctionArgExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunctionArgExpression` <a name="putFunctionArgExpression" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression"></a>

```typescript
public putFunctionArgExpression(value: PolicyInfoColumnMaskUsingFunctionArgExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.putFunctionArgExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression">PolicyInfoColumnMaskUsingFunctionArgExpression</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConstant` <a name="resetConstant" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```

##### `resetFunctionArgExpression` <a name="resetFunctionArgExpression" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.resetFunctionArgExpression"></a>

```typescript
public resetFunctionArgExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference">PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.functionArgExpressionInput">functionArgExpressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression">PolicyInfoColumnMaskUsingFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionArgExpression`<sup>Required</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.functionArgExpression"></a>

```typescript
public readonly functionArgExpression: PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference">PolicyInfoColumnMaskUsingFunctionArgExpressionOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `functionArgExpressionInput`<sup>Optional</sup> <a name="functionArgExpressionInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.functionArgExpressionInput"></a>

```typescript
public readonly functionArgExpressionInput: IResolvable | PolicyInfoColumnMaskUsingFunctionArgExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingFunctionArgExpression">PolicyInfoColumnMaskUsingFunctionArgExpression</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoColumnMaskUsing;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoColumnMaskUsing">PolicyInfoColumnMaskUsing</a>

---


### PolicyInfoGrantOutputReference <a name="PolicyInfoGrantOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoGrantOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.property.privilegesInput">privilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.property.privileges">privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrant">PolicyInfoGrant</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privilegesInput`<sup>Optional</sup> <a name="privilegesInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.property.privilegesInput"></a>

```typescript
public readonly privilegesInput: string[];
```

- *Type:* string[]

---

##### `privileges`<sup>Required</sup> <a name="privileges" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.property.privileges"></a>

```typescript
public readonly privileges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoGrantOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoGrant;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoGrant">PolicyInfoGrant</a>

---


### PolicyInfoMatchColumnsList <a name="PolicyInfoMatchColumnsList" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoMatchColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.get"></a>

```typescript
public get(index: number): PolicyInfoMatchColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoMatchColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>[]

---


### PolicyInfoMatchColumnsOutputReference <a name="PolicyInfoMatchColumnsOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoMatchColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resetCondition">resetCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoMatchColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoMatchColumns">PolicyInfoMatchColumns</a>

---


### PolicyInfoProviderConfigOutputReference <a name="PolicyInfoProviderConfigOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfig">PolicyInfoProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoProviderConfig">PolicyInfoProviderConfig</a>

---


### PolicyInfoRowFilterOutputReference <a name="PolicyInfoRowFilterOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoRowFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.putUsing">putUsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.resetUsing">resetUsing</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsing` <a name="putUsing" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.putUsing"></a>

```typescript
public putUsing(value: IResolvable | PolicyInfoRowFilterUsing[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.putUsing.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]

---

##### `resetUsing` <a name="resetUsing" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.resetUsing"></a>

```typescript
public resetUsing(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.using">using</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList">PolicyInfoRowFilterUsingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.usingInput">usingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `using`<sup>Required</sup> <a name="using" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.using"></a>

```typescript
public readonly using: PolicyInfoRowFilterUsingList;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList">PolicyInfoRowFilterUsingList</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `usingInput`<sup>Optional</sup> <a name="usingInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.usingInput"></a>

```typescript
public readonly usingInput: IResolvable | PolicyInfoRowFilterUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoRowFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilter">PolicyInfoRowFilter</a>

---


### PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference <a name="PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection">putTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection">resetTagIntrospection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagIntrospection` <a name="putTagIntrospection" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection"></a>

```typescript
public putTagIntrospection(value: PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.putTagIntrospection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---

##### `resetTagIntrospection` <a name="resetTagIntrospection" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.resetTagIntrospection"></a>

```typescript
public resetTagIntrospection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection">tagIntrospection</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput">tagIntrospectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression">PolicyInfoRowFilterUsingFunctionArgExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagIntrospection`<sup>Required</sup> <a name="tagIntrospection" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospection"></a>

```typescript
public readonly tagIntrospection: PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference</a>

---

##### `tagIntrospectionInput`<sup>Optional</sup> <a name="tagIntrospectionInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.tagIntrospectionInput"></a>

```typescript
public readonly tagIntrospectionInput: IResolvable | PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoRowFilterUsingFunctionArgExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression">PolicyInfoRowFilterUsingFunctionArgExpression</a>

---


### PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference <a name="PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput">columnAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias">columnAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnAliasInput`<sup>Optional</sup> <a name="columnAliasInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAliasInput"></a>

```typescript
public readonly columnAliasInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `columnAlias`<sup>Required</sup> <a name="columnAlias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.columnAlias"></a>

```typescript
public readonly columnAlias: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---


### PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference <a name="PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue">putColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue">putTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue">resetColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumnTagValue` <a name="putColumnTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue"></a>

```typescript
public putColumnTagValue(value: PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putColumnTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `putTagValue` <a name="putTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue"></a>

```typescript
public putTagValue(value: PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.putTagValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `resetColumnTagValue` <a name="resetColumnTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetColumnTagValue"></a>

```typescript
public resetColumnTagValue(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue">columnTagValue</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue">tagValue</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput">columnTagValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnTagValue`<sup>Required</sup> <a name="columnTagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValue"></a>

```typescript
public readonly columnTagValue: PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValueOutputReference</a>

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference</a>

---

##### `columnTagValueInput`<sup>Optional</sup> <a name="columnTagValueInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.columnTagValueInput"></a>

```typescript
public readonly columnTagValueInput: IResolvable | PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionColumnTagValue</a>

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: IResolvable | PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospection</a>

---


### PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference <a name="PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue">PolicyInfoRowFilterUsingFunctionArgExpressionTagIntrospectionTagValue</a>

---


### PolicyInfoRowFilterUsingList <a name="PolicyInfoRowFilterUsingList" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoRowFilterUsingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.get"></a>

```typescript
public get(index: number): PolicyInfoRowFilterUsingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoRowFilterUsing[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>[]

---


### PolicyInfoRowFilterUsingOutputReference <a name="PolicyInfoRowFilterUsingOutputReference" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer"></a>

```typescript
import { policyInfo } from '@cdktn/provider-databricks'

new policyInfo.PolicyInfoRowFilterUsingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression">putFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resetConstant">resetConstant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resetFunctionArgExpression">resetFunctionArgExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFunctionArgExpression` <a name="putFunctionArgExpression" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression"></a>

```typescript
public putFunctionArgExpression(value: PolicyInfoRowFilterUsingFunctionArgExpression): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.putFunctionArgExpression.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression">PolicyInfoRowFilterUsingFunctionArgExpression</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetConstant` <a name="resetConstant" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```

##### `resetFunctionArgExpression` <a name="resetFunctionArgExpression" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.resetFunctionArgExpression"></a>

```typescript
public resetFunctionArgExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.functionArgExpression">functionArgExpression</a></code> | <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference">PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.functionArgExpressionInput">functionArgExpressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression">PolicyInfoRowFilterUsingFunctionArgExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionArgExpression`<sup>Required</sup> <a name="functionArgExpression" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.functionArgExpression"></a>

```typescript
public readonly functionArgExpression: PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference">PolicyInfoRowFilterUsingFunctionArgExpressionOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `functionArgExpressionInput`<sup>Optional</sup> <a name="functionArgExpressionInput" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.functionArgExpressionInput"></a>

```typescript
public readonly functionArgExpressionInput: IResolvable | PolicyInfoRowFilterUsingFunctionArgExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingFunctionArgExpression">PolicyInfoRowFilterUsingFunctionArgExpression</a>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PolicyInfoRowFilterUsing;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.policyInfo.PolicyInfoRowFilterUsing">PolicyInfoRowFilterUsing</a>

---




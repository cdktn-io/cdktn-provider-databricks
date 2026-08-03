# `accountFederationPolicy` Submodule <a name="`accountFederationPolicy` Submodule" id="@cdktn/provider-databricks.accountFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountFederationPolicy <a name="AccountFederationPolicy" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy databricks_account_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer"></a>

```typescript
import { accountFederationPolicy } from '@cdktn/provider-databricks'

new accountFederationPolicy.AccountFederationPolicy(scope: Construct, id: string, config?: AccountFederationPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig">AccountFederationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig">AccountFederationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.putOidcPolicy">putOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOidcPolicy">resetOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetPolicyId">resetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetServicePrincipalId">resetServicePrincipalId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOidcPolicy` <a name="putOidcPolicy" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.putOidcPolicy"></a>

```typescript
public putOidcPolicy(value: AccountFederationPolicyOidcPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetOidcPolicy` <a name="resetOidcPolicy" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOidcPolicy"></a>

```typescript
public resetOidcPolicy(): void
```

##### `resetPolicyId` <a name="resetPolicyId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetPolicyId"></a>

```typescript
public resetPolicyId(): void
```

##### `resetServicePrincipalId` <a name="resetServicePrincipalId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetServicePrincipalId"></a>

```typescript
public resetServicePrincipalId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccountFederationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isConstruct"></a>

```typescript
import { accountFederationPolicy } from '@cdktn/provider-databricks'

accountFederationPolicy.AccountFederationPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformElement"></a>

```typescript
import { accountFederationPolicy } from '@cdktn/provider-databricks'

accountFederationPolicy.AccountFederationPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformResource"></a>

```typescript
import { accountFederationPolicy } from '@cdktn/provider-databricks'

accountFederationPolicy.AccountFederationPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport"></a>

```typescript
import { accountFederationPolicy } from '@cdktn/provider-databricks'

accountFederationPolicy.AccountFederationPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AccountFederationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountFederationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AccountFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference">AccountFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicyInput">oidcPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalIdInput">servicePrincipalIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalId">servicePrincipalId</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oidcPolicy`<sup>Required</sup> <a name="oidcPolicy" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicy"></a>

```typescript
public readonly oidcPolicy: AccountFederationPolicyOidcPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference">AccountFederationPolicyOidcPolicyOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `oidcPolicyInput`<sup>Optional</sup> <a name="oidcPolicyInput" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicyInput"></a>

```typescript
public readonly oidcPolicyInput: IResolvable | AccountFederationPolicyOidcPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a>

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `servicePrincipalIdInput`<sup>Optional</sup> <a name="servicePrincipalIdInput" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalIdInput"></a>

```typescript
public readonly servicePrincipalIdInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `servicePrincipalId`<sup>Required</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountFederationPolicyConfig <a name="AccountFederationPolicyConfig" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.Initializer"></a>

```typescript
import { accountFederationPolicy } from '@cdktn/provider-databricks'

const accountFederationPolicyConfig: accountFederationPolicy.AccountFederationPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#description AccountFederationPolicy#description}. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.oidcPolicy">oidcPolicy</a></code> | <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#oidc_policy AccountFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#policy_id AccountFederationPolicy#policy_id}. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.servicePrincipalId">servicePrincipalId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#service_principal_id AccountFederationPolicy#service_principal_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#description AccountFederationPolicy#description}.

---

##### `oidcPolicy`<sup>Optional</sup> <a name="oidcPolicy" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.oidcPolicy"></a>

```typescript
public readonly oidcPolicy: AccountFederationPolicyOidcPolicy;
```

- *Type:* <a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#oidc_policy AccountFederationPolicy#oidc_policy}.

---

##### `policyId`<sup>Optional</sup> <a name="policyId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#policy_id AccountFederationPolicy#policy_id}.

---

##### `servicePrincipalId`<sup>Optional</sup> <a name="servicePrincipalId" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.servicePrincipalId"></a>

```typescript
public readonly servicePrincipalId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#service_principal_id AccountFederationPolicy#service_principal_id}.

---

### AccountFederationPolicyOidcPolicy <a name="AccountFederationPolicyOidcPolicy" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.Initializer"></a>

```typescript
import { accountFederationPolicy } from '@cdktn/provider-databricks'

const accountFederationPolicyOidcPolicy: accountFederationPolicy.AccountFederationPolicyOidcPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.audiences">audiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#audiences AccountFederationPolicy#audiences}. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#issuer AccountFederationPolicy#issuer}. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksJson">jwksJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#jwks_json AccountFederationPolicy#jwks_json}. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksUri">jwksUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#jwks_uri AccountFederationPolicy#jwks_uri}. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subject">subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#subject AccountFederationPolicy#subject}. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subjectClaim">subjectClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#subject_claim AccountFederationPolicy#subject_claim}. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#audiences AccountFederationPolicy#audiences}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#issuer AccountFederationPolicy#issuer}.

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#jwks_json AccountFederationPolicy#jwks_json}.

---

##### `jwksUri`<sup>Optional</sup> <a name="jwksUri" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#jwks_uri AccountFederationPolicy#jwks_uri}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#subject AccountFederationPolicy#subject}.

---

##### `subjectClaim`<sup>Optional</sup> <a name="subjectClaim" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subjectClaim"></a>

```typescript
public readonly subjectClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/account_federation_policy#subject_claim AccountFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountFederationPolicyOidcPolicyOutputReference <a name="AccountFederationPolicyOidcPolicyOutputReference" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```typescript
import { accountFederationPolicy } from '@cdktn/provider-databricks'

new accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksUri">resetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">resetSubjectClaim</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAudiences` <a name="resetAudiences" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```typescript
public resetAudiences(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```typescript
public resetJwksJson(): void
```

##### `resetJwksUri` <a name="resetJwksUri" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```typescript
public resetJwksUri(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```

##### `resetSubjectClaim` <a name="resetSubjectClaim" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```typescript
public resetSubjectClaim(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">jwksUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">subjectClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiences">audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJson">jwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUri">jwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim">subjectClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```typescript
public readonly audiencesInput: string[];
```

- *Type:* string[]

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```typescript
public readonly jwksJsonInput: string;
```

- *Type:* string

---

##### `jwksUriInput`<sup>Optional</sup> <a name="jwksUriInput" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```typescript
public readonly jwksUriInput: string;
```

- *Type:* string

---

##### `subjectClaimInput`<sup>Optional</sup> <a name="subjectClaimInput" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```typescript
public readonly subjectClaimInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

---

##### `jwksUri`<sup>Required</sup> <a name="jwksUri" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```typescript
public readonly jwksUri: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `subjectClaim`<sup>Required</sup> <a name="subjectClaim" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```typescript
public readonly subjectClaim: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountFederationPolicyOidcPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a>

---




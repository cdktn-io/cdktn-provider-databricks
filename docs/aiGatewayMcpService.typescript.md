# `aiGatewayMcpService` Submodule <a name="`aiGatewayMcpService` Submodule" id="@cdktn/provider-databricks.aiGatewayMcpService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGatewayMcpService <a name="AiGatewayMcpService" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service databricks_ai_gateway_mcp_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

new aiGatewayMcpService.AiGatewayMcpService(scope: Construct, id: string, config: AiGatewayMcpServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig">AiGatewayMcpServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig">AiGatewayMcpServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putConfig"></a>

```typescript
public putConfig(value: AiGatewayMcpServiceConfigA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a>

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putProviderConfig"></a>

```typescript
public putProviderConfig(value: AiGatewayMcpServiceProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiGatewayMcpService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isConstruct"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

aiGatewayMcpService.AiGatewayMcpService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformElement"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

aiGatewayMcpService.AiGatewayMcpService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformResource"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

aiGatewayMcpService.AiGatewayMcpService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AiGatewayMcpService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AiGatewayMcpService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AiGatewayMcpService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiGatewayMcpService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.browseOnly">browseOnly</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference">AiGatewayMcpServiceConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.effectiveOwner">effectiveOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference">AiGatewayMcpServiceProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.configInput">configInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.mcpServiceIdInput">mcpServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.mcpServiceId">mcpServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `browseOnly`<sup>Required</sup> <a name="browseOnly" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.browseOnly"></a>

```typescript
public readonly browseOnly: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.config"></a>

```typescript
public readonly config: AiGatewayMcpServiceConfigAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference">AiGatewayMcpServiceConfigAOutputReference</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveOwner`<sup>Required</sup> <a name="effectiveOwner" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.effectiveOwner"></a>

```typescript
public readonly effectiveOwner: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.providerConfig"></a>

```typescript
public readonly providerConfig: AiGatewayMcpServiceProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference">AiGatewayMcpServiceProviderConfigOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | AiGatewayMcpServiceConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a>

---

##### `mcpServiceIdInput`<sup>Optional</sup> <a name="mcpServiceIdInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.mcpServiceIdInput"></a>

```typescript
public readonly mcpServiceIdInput: string;
```

- *Type:* string

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | AiGatewayMcpServiceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `mcpServiceId`<sup>Required</sup> <a name="mcpServiceId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.mcpServiceId"></a>

```typescript
public readonly mcpServiceId: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayMcpServiceConfig <a name="AiGatewayMcpServiceConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.Initializer"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

const aiGatewayMcpServiceConfig: aiGatewayMcpService.AiGatewayMcpServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.mcpServiceId">mcpServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#mcp_service_id AiGatewayMcpService#mcp_service_id}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#parent AiGatewayMcpService#parent}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#comment AiGatewayMcpService#comment}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#config AiGatewayMcpService#config}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#owner AiGatewayMcpService#owner}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#provider_config AiGatewayMcpService#provider_config}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mcpServiceId`<sup>Required</sup> <a name="mcpServiceId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.mcpServiceId"></a>

```typescript
public readonly mcpServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#mcp_service_id AiGatewayMcpService#mcp_service_id}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#parent AiGatewayMcpService#parent}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#comment AiGatewayMcpService#comment}.

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.config"></a>

```typescript
public readonly config: AiGatewayMcpServiceConfigA;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#config AiGatewayMcpService#config}.

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#owner AiGatewayMcpService#owner}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: AiGatewayMcpServiceProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#provider_config AiGatewayMcpService#provider_config}.

---

### AiGatewayMcpServiceConfigA <a name="AiGatewayMcpServiceConfigA" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.Initializer"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

const aiGatewayMcpServiceConfigA: aiGatewayMcpService.AiGatewayMcpServiceConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.includeToolSelectors">includeToolSelectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#include_tool_selectors AiGatewayMcpService#include_tool_selectors}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.rateLimits">rateLimits</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#rate_limits AiGatewayMcpService#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.sourceConnection">sourceConnection</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#source_connection AiGatewayMcpService#source_connection}. |

---

##### `includeToolSelectors`<sup>Optional</sup> <a name="includeToolSelectors" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.includeToolSelectors"></a>

```typescript
public readonly includeToolSelectors: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#include_tool_selectors AiGatewayMcpService#include_tool_selectors}.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.rateLimits"></a>

```typescript
public readonly rateLimits: IResolvable | AiGatewayMcpServiceConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#rate_limits AiGatewayMcpService#rate_limits}.

---

##### `sourceConnection`<sup>Optional</sup> <a name="sourceConnection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA.property.sourceConnection"></a>

```typescript
public readonly sourceConnection: AiGatewayMcpServiceConfigSourceConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#source_connection AiGatewayMcpService#source_connection}.

---

### AiGatewayMcpServiceConfigRateLimits <a name="AiGatewayMcpServiceConfigRateLimits" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.Initializer"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

const aiGatewayMcpServiceConfigRateLimits: aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#key AiGatewayMcpService#key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#renewal_period AiGatewayMcpService#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#principal AiGatewayMcpService#principal}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requests">requests</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#requests AiGatewayMcpService#requests}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requestTagKey">requestTagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#request_tag_key AiGatewayMcpService#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requestTagValue">requestTagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#request_tag_value AiGatewayMcpService#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.tokens">tokens</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#tokens AiGatewayMcpService#tokens}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#key AiGatewayMcpService#key}.

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#renewal_period AiGatewayMcpService#renewal_period}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#principal AiGatewayMcpService#principal}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requests"></a>

```typescript
public readonly requests: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#requests AiGatewayMcpService#requests}.

---

##### `requestTagKey`<sup>Optional</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requestTagKey"></a>

```typescript
public readonly requestTagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#request_tag_key AiGatewayMcpService#request_tag_key}.

---

##### `requestTagValue`<sup>Optional</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.requestTagValue"></a>

```typescript
public readonly requestTagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#request_tag_value AiGatewayMcpService#request_tag_value}.

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#tokens AiGatewayMcpService#tokens}.

---

### AiGatewayMcpServiceConfigSourceConnection <a name="AiGatewayMcpServiceConfigSourceConnection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection.Initializer"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

const aiGatewayMcpServiceConfigSourceConnection: aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#name AiGatewayMcpService#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#name AiGatewayMcpService#name}.

---

### AiGatewayMcpServiceProviderConfig <a name="AiGatewayMcpServiceProviderConfig" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig.Initializer"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

const aiGatewayMcpServiceProviderConfig: aiGatewayMcpService.AiGatewayMcpServiceProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#workspace_id AiGatewayMcpService#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.124.0/docs/resources/ai_gateway_mcp_service#workspace_id AiGatewayMcpService#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayMcpServiceConfigAOutputReference <a name="AiGatewayMcpServiceConfigAOutputReference" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.Initializer"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

new aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putSourceConnection">putSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetIncludeToolSelectors">resetIncludeToolSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetSourceConnection">resetSourceConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRateLimits` <a name="putRateLimits" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putRateLimits"></a>

```typescript
public putRateLimits(value: IResolvable | AiGatewayMcpServiceConfigRateLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putRateLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>[]

---

##### `putSourceConnection` <a name="putSourceConnection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putSourceConnection"></a>

```typescript
public putSourceConnection(value: AiGatewayMcpServiceConfigSourceConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.putSourceConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a>

---

##### `resetIncludeToolSelectors` <a name="resetIncludeToolSelectors" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetIncludeToolSelectors"></a>

```typescript
public resetIncludeToolSelectors(): void
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetRateLimits"></a>

```typescript
public resetRateLimits(): void
```

##### `resetSourceConnection` <a name="resetSourceConnection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.resetSourceConnection"></a>

```typescript
public resetSourceConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList">AiGatewayMcpServiceConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.sourceConnection">sourceConnection</a></code> | <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference">AiGatewayMcpServiceConfigSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectorsInput">includeToolSelectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.rateLimitsInput">rateLimitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.sourceConnectionInput">sourceConnectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectors">includeToolSelectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.rateLimits"></a>

```typescript
public readonly rateLimits: AiGatewayMcpServiceConfigRateLimitsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList">AiGatewayMcpServiceConfigRateLimitsList</a>

---

##### `sourceConnection`<sup>Required</sup> <a name="sourceConnection" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.sourceConnection"></a>

```typescript
public readonly sourceConnection: AiGatewayMcpServiceConfigSourceConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference">AiGatewayMcpServiceConfigSourceConnectionOutputReference</a>

---

##### `includeToolSelectorsInput`<sup>Optional</sup> <a name="includeToolSelectorsInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectorsInput"></a>

```typescript
public readonly includeToolSelectorsInput: string[];
```

- *Type:* string[]

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.rateLimitsInput"></a>

```typescript
public readonly rateLimitsInput: IResolvable | AiGatewayMcpServiceConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>[]

---

##### `sourceConnectionInput`<sup>Optional</sup> <a name="sourceConnectionInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.sourceConnectionInput"></a>

```typescript
public readonly sourceConnectionInput: IResolvable | AiGatewayMcpServiceConfigSourceConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a>

---

##### `includeToolSelectors`<sup>Required</sup> <a name="includeToolSelectors" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.includeToolSelectors"></a>

```typescript
public readonly includeToolSelectors: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayMcpServiceConfigA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigA">AiGatewayMcpServiceConfigA</a>

---


### AiGatewayMcpServiceConfigRateLimitsList <a name="AiGatewayMcpServiceConfigRateLimitsList" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

new aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.get"></a>

```typescript
public get(index: number): AiGatewayMcpServiceConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayMcpServiceConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>[]

---


### AiGatewayMcpServiceConfigRateLimitsOutputReference <a name="AiGatewayMcpServiceConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

new aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagKey">resetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagValue">resetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetTokens">resetTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```

##### `resetRequestTagKey` <a name="resetRequestTagKey" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```typescript
public resetRequestTagKey(): void
```

##### `resetRequestTagValue` <a name="resetRequestTagValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```typescript
public resetRequestTagValue(): void
```

##### `resetTokens` <a name="resetTokens" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.resetTokens"></a>

```typescript
public resetTokens(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestsInput">requestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKeyInput">requestTagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValueInput">requestTagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokensInput">tokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requests">requests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKey">requestTagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValue">requestTagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```typescript
public readonly renewalPeriodInput: string;
```

- *Type:* string

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: number;
```

- *Type:* number

---

##### `requestTagKeyInput`<sup>Optional</sup> <a name="requestTagKeyInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```typescript
public readonly requestTagKeyInput: string;
```

- *Type:* string

---

##### `requestTagValueInput`<sup>Optional</sup> <a name="requestTagValueInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```typescript
public readonly requestTagValueInput: string;
```

- *Type:* string

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokensInput"></a>

```typescript
public readonly tokensInput: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requests"></a>

```typescript
public readonly requests: number;
```

- *Type:* number

---

##### `requestTagKey`<sup>Required</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagKey"></a>

```typescript
public readonly requestTagKey: string;
```

- *Type:* string

---

##### `requestTagValue`<sup>Required</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.requestTagValue"></a>

```typescript
public readonly requestTagValue: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayMcpServiceConfigRateLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigRateLimits">AiGatewayMcpServiceConfigRateLimits</a>

---


### AiGatewayMcpServiceConfigSourceConnectionOutputReference <a name="AiGatewayMcpServiceConfigSourceConnectionOutputReference" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

new aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayMcpServiceConfigSourceConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceConfigSourceConnection">AiGatewayMcpServiceConfigSourceConnection</a>

---


### AiGatewayMcpServiceProviderConfigOutputReference <a name="AiGatewayMcpServiceProviderConfigOutputReference" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.Initializer"></a>

```typescript
import { aiGatewayMcpService } from '@cdktn/provider-databricks'

new aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AiGatewayMcpServiceProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.aiGatewayMcpService.AiGatewayMcpServiceProviderConfig">AiGatewayMcpServiceProviderConfig</a>

---




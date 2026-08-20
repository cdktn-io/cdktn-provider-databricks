# `dataDatabricksAiGatewayMcpServices` Submodule <a name="`dataDatabricksAiGatewayMcpServices` Submodule" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAiGatewayMcpServices <a name="DataDatabricksAiGatewayMcpServices" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services databricks_ai_gateway_mcp_services}.

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices(scope: Construct, id: string, config?: DataDatabricksAiGatewayMcpServicesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig">DataDatabricksAiGatewayMcpServicesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig">DataDatabricksAiGatewayMcpServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetView">resetView</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAiGatewayMcpServicesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a>

---

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetPageSize"></a>

```typescript
public resetPageSize(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```

##### `resetView` <a name="resetView" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.resetView"></a>

```typescript
public resetView(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatabricksAiGatewayMcpServices resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isConstruct"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformElement"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformDataSource"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatabricksAiGatewayMcpServices resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAiGatewayMcpServices to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAiGatewayMcpServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatabricksAiGatewayMcpServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.mcpServices">mcpServices</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList">DataDatabricksAiGatewayMcpServicesMcpServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference">DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.pageSizeInput">pageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.viewInput">viewInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.pageSize">pageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.view">view</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `mcpServices`<sup>Required</sup> <a name="mcpServices" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.mcpServices"></a>

```typescript
public readonly mcpServices: DataDatabricksAiGatewayMcpServicesMcpServicesList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList">DataDatabricksAiGatewayMcpServicesMcpServicesList</a>

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference">DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference</a>

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.pageSizeInput"></a>

```typescript
public readonly pageSizeInput: number;
```

- *Type:* number

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAiGatewayMcpServicesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a>

---

##### `viewInput`<sup>Optional</sup> <a name="viewInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.viewInput"></a>

```typescript
public readonly viewInput: string;
```

- *Type:* string

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `view`<sup>Required</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServices.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAiGatewayMcpServicesConfig <a name="DataDatabricksAiGatewayMcpServicesConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayMcpServicesConfig: dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.pageSize">pageSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#page_size DataDatabricksAiGatewayMcpServices#page_size}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.parent">parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#parent DataDatabricksAiGatewayMcpServices#parent}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.view">view</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#view DataDatabricksAiGatewayMcpServices#view}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.pageSize"></a>

```typescript
public readonly pageSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#page_size DataDatabricksAiGatewayMcpServices#page_size}.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#parent DataDatabricksAiGatewayMcpServices#parent}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiGatewayMcpServicesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}.

---

##### `view`<sup>Optional</sup> <a name="view" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesConfig.property.view"></a>

```typescript
public readonly view: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#view DataDatabricksAiGatewayMcpServices#view}.

---

### DataDatabricksAiGatewayMcpServicesMcpServices <a name="DataDatabricksAiGatewayMcpServicesMcpServices" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayMcpServicesMcpServices: dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#name DataDatabricksAiGatewayMcpServices#name}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#name DataDatabricksAiGatewayMcpServices#name}.

---

##### `providerConfig`<sup>Optional</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#provider_config DataDatabricksAiGatewayMcpServices#provider_config}.

---

### DataDatabricksAiGatewayMcpServicesMcpServicesConfig <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayMcpServicesMcpServicesConfig: dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.includeToolSelectors">includeToolSelectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#include_tool_selectors DataDatabricksAiGatewayMcpServices#include_tool_selectors}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.rateLimits">rateLimits</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#rate_limits DataDatabricksAiGatewayMcpServices#rate_limits}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.sourceConnection">sourceConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#source_connection DataDatabricksAiGatewayMcpServices#source_connection}. |

---

##### `includeToolSelectors`<sup>Optional</sup> <a name="includeToolSelectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.includeToolSelectors"></a>

```typescript
public readonly includeToolSelectors: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#include_tool_selectors DataDatabricksAiGatewayMcpServices#include_tool_selectors}.

---

##### `rateLimits`<sup>Optional</sup> <a name="rateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.rateLimits"></a>

```typescript
public readonly rateLimits: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#rate_limits DataDatabricksAiGatewayMcpServices#rate_limits}.

---

##### `sourceConnection`<sup>Optional</sup> <a name="sourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig.property.sourceConnection"></a>

```typescript
public readonly sourceConnection: DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#source_connection DataDatabricksAiGatewayMcpServices#source_connection}.

---

### DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits: dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#key DataDatabricksAiGatewayMcpServices#key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#renewal_period DataDatabricksAiGatewayMcpServices#renewal_period}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.principal">principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#principal DataDatabricksAiGatewayMcpServices#principal}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requests">requests</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#requests DataDatabricksAiGatewayMcpServices#requests}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requestTagKey">requestTagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#request_tag_key DataDatabricksAiGatewayMcpServices#request_tag_key}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requestTagValue">requestTagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#request_tag_value DataDatabricksAiGatewayMcpServices#request_tag_value}. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.tokens">tokens</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#tokens DataDatabricksAiGatewayMcpServices#tokens}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#key DataDatabricksAiGatewayMcpServices#key}.

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#renewal_period DataDatabricksAiGatewayMcpServices#renewal_period}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#principal DataDatabricksAiGatewayMcpServices#principal}.

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requests"></a>

```typescript
public readonly requests: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#requests DataDatabricksAiGatewayMcpServices#requests}.

---

##### `requestTagKey`<sup>Optional</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requestTagKey"></a>

```typescript
public readonly requestTagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#request_tag_key DataDatabricksAiGatewayMcpServices#request_tag_key}.

---

##### `requestTagValue`<sup>Optional</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.requestTagValue"></a>

```typescript
public readonly requestTagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#request_tag_value DataDatabricksAiGatewayMcpServices#request_tag_value}.

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#tokens DataDatabricksAiGatewayMcpServices#tokens}.

---

### DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection: dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#name DataDatabricksAiGatewayMcpServices#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#name DataDatabricksAiGatewayMcpServices#name}.

---

### DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig <a name="DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig: dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}.

---

### DataDatabricksAiGatewayMcpServicesProviderConfig <a name="DataDatabricksAiGatewayMcpServicesProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

const dataDatabricksAiGatewayMcpServicesProviderConfig: dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}. |

---

##### `workspaceId`<sup>Optional</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.128.0/docs/data-sources/ai_gateway_mcp_services#workspace_id DataDatabricksAiGatewayMcpServices#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putRateLimits">putRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putSourceConnection">putSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetIncludeToolSelectors">resetIncludeToolSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetRateLimits">resetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetSourceConnection">resetSourceConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRateLimits` <a name="putRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putRateLimits"></a>

```typescript
public putRateLimits(value: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putRateLimits.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>[]

---

##### `putSourceConnection` <a name="putSourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putSourceConnection"></a>

```typescript
public putSourceConnection(value: DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.putSourceConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a>

---

##### `resetIncludeToolSelectors` <a name="resetIncludeToolSelectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetIncludeToolSelectors"></a>

```typescript
public resetIncludeToolSelectors(): void
```

##### `resetRateLimits` <a name="resetRateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetRateLimits"></a>

```typescript
public resetRateLimits(): void
```

##### `resetSourceConnection` <a name="resetSourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.resetSourceConnection"></a>

```typescript
public resetSourceConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.rateLimits">rateLimits</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.sourceConnection">sourceConnection</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.includeToolSelectorsInput">includeToolSelectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.rateLimitsInput">rateLimitsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.sourceConnectionInput">sourceConnectionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.includeToolSelectors">includeToolSelectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig">DataDatabricksAiGatewayMcpServicesMcpServicesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `rateLimits`<sup>Required</sup> <a name="rateLimits" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.rateLimits"></a>

```typescript
public readonly rateLimits: DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList</a>

---

##### `sourceConnection`<sup>Required</sup> <a name="sourceConnection" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.sourceConnection"></a>

```typescript
public readonly sourceConnection: DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference</a>

---

##### `includeToolSelectorsInput`<sup>Optional</sup> <a name="includeToolSelectorsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.includeToolSelectorsInput"></a>

```typescript
public readonly includeToolSelectorsInput: string[];
```

- *Type:* string[]

---

##### `rateLimitsInput`<sup>Optional</sup> <a name="rateLimitsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.rateLimitsInput"></a>

```typescript
public readonly rateLimitsInput: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>[]

---

##### `sourceConnectionInput`<sup>Optional</sup> <a name="sourceConnectionInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.sourceConnectionInput"></a>

```typescript
public readonly sourceConnectionInput: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a>

---

##### `includeToolSelectors`<sup>Required</sup> <a name="includeToolSelectors" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.includeToolSelectors"></a>

```typescript
public readonly includeToolSelectors: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiGatewayMcpServicesMcpServicesConfig;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfig">DataDatabricksAiGatewayMcpServicesMcpServicesConfig</a>

---


### DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.get"></a>

```typescript
public get(index: number): DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>[]

---


### DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequestTagKey">resetRequestTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequestTagValue">resetRequestTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetTokens">resetTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```

##### `resetRequestTagKey` <a name="resetRequestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequestTagKey"></a>

```typescript
public resetRequestTagKey(): void
```

##### `resetRequestTagValue` <a name="resetRequestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetRequestTagValue"></a>

```typescript
public resetRequestTagValue(): void
```

##### `resetTokens` <a name="resetTokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.resetTokens"></a>

```typescript
public resetTokens(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.renewalPeriodInput">renewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestsInput">requestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagKeyInput">requestTagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagValueInput">requestTagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.tokensInput">tokensInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.renewalPeriod">renewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requests">requests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagKey">requestTagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagValue">requestTagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.tokens">tokens</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `renewalPeriodInput`<sup>Optional</sup> <a name="renewalPeriodInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.renewalPeriodInput"></a>

```typescript
public readonly renewalPeriodInput: string;
```

- *Type:* string

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: number;
```

- *Type:* number

---

##### `requestTagKeyInput`<sup>Optional</sup> <a name="requestTagKeyInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagKeyInput"></a>

```typescript
public readonly requestTagKeyInput: string;
```

- *Type:* string

---

##### `requestTagValueInput`<sup>Optional</sup> <a name="requestTagValueInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagValueInput"></a>

```typescript
public readonly requestTagValueInput: string;
```

- *Type:* string

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.tokensInput"></a>

```typescript
public readonly tokensInput: number;
```

- *Type:* number

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `renewalPeriod`<sup>Required</sup> <a name="renewalPeriod" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.renewalPeriod"></a>

```typescript
public readonly renewalPeriod: string;
```

- *Type:* string

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requests"></a>

```typescript
public readonly requests: number;
```

- *Type:* number

---

##### `requestTagKey`<sup>Required</sup> <a name="requestTagKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagKey"></a>

```typescript
public readonly requestTagKey: string;
```

- *Type:* string

---

##### `requestTagValue`<sup>Required</sup> <a name="requestTagValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.requestTagValue"></a>

```typescript
public readonly requestTagValue: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.tokens"></a>

```typescript
public readonly tokens: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits">DataDatabricksAiGatewayMcpServicesMcpServicesConfigRateLimits</a>

---


### DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference <a name="DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.isDeleted">isDeleted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDeleted`<sup>Required</sup> <a name="isDeleted" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.isDeleted"></a>

```typescript
public readonly isDeleted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection">DataDatabricksAiGatewayMcpServicesMcpServicesConfigSourceConnection</a>

---


### DataDatabricksAiGatewayMcpServicesMcpServicesList <a name="DataDatabricksAiGatewayMcpServicesMcpServicesList" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.get"></a>

```typescript
public get(index: number): DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices">DataDatabricksAiGatewayMcpServicesMcpServices</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServices[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices">DataDatabricksAiGatewayMcpServicesMcpServices</a>[]

---


### DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference <a name="DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.putProviderConfig">putProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.resetProviderConfig">resetProviderConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProviderConfig` <a name="putProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.putProviderConfig"></a>

```typescript
public putProviderConfig(value: DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a>

---

##### `resetProviderConfig` <a name="resetProviderConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.resetProviderConfig"></a>

```typescript
public resetProviderConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.effectiveOwner">effectiveOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.metastoreId">metastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.providerConfig">providerConfig</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.updatedBy">updatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.providerConfigInput">providerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices">DataDatabricksAiGatewayMcpServicesMcpServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.config"></a>

```typescript
public readonly config: DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesConfigOutputReference</a>

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveOwner`<sup>Required</sup> <a name="effectiveOwner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.effectiveOwner"></a>

```typescript
public readonly effectiveOwner: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.metastoreId"></a>

```typescript
public readonly metastoreId: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `providerConfig`<sup>Required</sup> <a name="providerConfig" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.providerConfig"></a>

```typescript
public readonly providerConfig: DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference</a>

---

##### `updatedBy`<sup>Required</sup> <a name="updatedBy" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.updatedBy"></a>

```typescript
public readonly updatedBy: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `providerConfigInput`<sup>Optional</sup> <a name="providerConfigInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.providerConfigInput"></a>

```typescript
public readonly providerConfigInput: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatabricksAiGatewayMcpServicesMcpServices;
```

- *Type:* <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServices">DataDatabricksAiGatewayMcpServicesMcpServices</a>

---


### DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference <a name="DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesMcpServicesProviderConfig</a>

---


### DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference <a name="DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.Initializer"></a>

```typescript
import { dataDatabricksAiGatewayMcpServices } from '@cdktn/provider-databricks'

new dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.resetWorkspaceId">resetWorkspaceId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkspaceId` <a name="resetWorkspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.resetWorkspaceId"></a>

```typescript
public resetWorkspaceId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataDatabricksAiGatewayMcpServicesProviderConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-databricks.dataDatabricksAiGatewayMcpServices.DataDatabricksAiGatewayMcpServicesProviderConfig">DataDatabricksAiGatewayMcpServicesProviderConfig</a>

---



